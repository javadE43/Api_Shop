import { Response, Request } from "express";
//
import { validationResult } from "express-validator";
//
import { response } from "../helper/customResponse.js";
import messageResponse from "../util/messageResponse.json" assert { type: "json" };
import * as usersService from "../service/userService.js";
import { getPagination } from "../dal/dataSort/pagination.js";
import { GetTokenByNameAndUserId } from "../service/tokenService.js";
import jwt from "jsonwebtoken";
import { RemoveImage } from "../helper/removeImage.js";

//createUsers
export const create = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!!error.array().length) {
    response({
      res,
      message: messageResponse.postAndUpdateUsers[401],
      code: 400,
      data: error.array(),
    });
    if(req.body.image){
      RemoveImage(req.body.image)
    }
    return;
  }
  const newUser:boolean = await usersService.create(req.body);
  if (newUser){
    response({
      res,
      message: messageResponse.postAndUpdateUsers[201],
      code: 201,
      data: req.body.username,
    });
  }
};

//updateUser
export const updateUser = async (req: Request, res: Response) => {
  const error = validationResult(req);
  const id = Number(req.params.userId);
  if (!!error.array().length) {
    response({
      res,
      message: messageResponse.postAndUpdateUsers[401],
      code: 401,
      data: error.array(),
    });
    if(req.body.image){
      RemoveImage(req.body.image)
    }
    return;
  }
  const update:boolean = await usersService.updata(id, req.body);
  if (update){
    response({
      res,
      message: messageResponse.postAndUpdateUsers[200],
      code: 200,
      data: update,
    });
  }
};

// getAllUsers
export const getUser = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!!error.array().length) {
    response({
      res,
      message: messageResponse.getUsers[401],
      code: 401,
      data: error.array(),
    });
    return;
  }
  const size = req.query.size ? Number(req.query.size) : 1;
  const page = req.query.page ? Number(req.query.page) : 0;
  const condition = req.query?.username ? (req.query.username as string) : null;
  const role = req.query?.role ? (req.query.role as string) : null;
  const { offset, limit } = getPagination(page, size);
  const users = await usersService.getAllUsers(offset, limit, condition, role);
  if (users === false) {
    response({
      res,
      message: messageResponse.getUsers[400],
      code: 400,
      data: users,
    });
  } else if (typeof users !== "boolean") {
    response({
      res,
      message: messageResponse.getUsers[200],
      code: 200,
      count: users.count,
      data: users.data,
      totalPages: users.totalPages,
      currentPage: users.currentPage,
      nextPage: users.nextPage,
      previousPage: users.previousPage,
    });
  }
};

//getByIdUser
export const getByIdUser = async (req: Request, res: Response) => {
  const error = validationResult(req);
  const id = Number(req.params.userId);
  if (!!error.array().length) {
    response({
      res,
      message: messageResponse.getUsers[400],
      code: 400,
      data: error.array(),
    });
    return;
  }
  const user = await usersService.getByIdUser(id);
  if (user === false) {
    response({
      res,
      message: messageResponse.getUsers[403],
      code: 403,
    });
  } else {
    response({
      res,
      message: messageResponse.getUsers[200],
      code: 200,
      data: user,
    });
  }
};

//RemoveUsersBYiD

export const removeUser = async (req: Request, res: Response) => {
  const id = Number(req.params.userId);
  const error = validationResult(req);
  if (!!error.array().length) {
    response({
      res,
      message: messageResponse.getUsers[400],
      code: 400,
      data: error.array(),
    });
    return;
  }
  const remove = await usersService.deleteById(id);
  if (remove === false) {
    response({
      res,
      message: messageResponse.getUsers[403],
      code: 403,
    });
  } else {
    response({
      res,
      message: messageResponse.getUsers[200],
      code: 200,
      data: remove,
    });
  }
};
//removeMultipleUsers

export const removeMultipleUsers = async (req: Request, res: Response) => {
  const id: number[] = req.body.userIds;
  const error = validationResult(req);
  if (!!error.array().length) {
    response({
      res,
      message: messageResponse.getUsers[400],
      code: 400,
      data: error.array(),
    });
    return;
  }
  const remove = await usersService.removeMultipleUsers(id);
  if (remove === false) {
    response({
      res,
      message: messageResponse.getUsers[403],
      code: 403,
    });
  } else {
    response({
      res,
      message: messageResponse.getUsers[200],
      code: 200,
      data: remove,
    });
  }
};

//LogOutUser

export const LogOutUser = async (req: Request, res: Response) => {
  const userId: number = Number(req.params.userId);
  const cookie = req.cookies;
  if (!cookie?.shop) {
    res.sendStatus(401);
    return;
  }
  const refreshToken: string = cookie?.shop;
  const chackToken = await GetTokenByNameAndUserId(userId, refreshToken);

  if (chackToken === false) {
    res.clearCookie("shop", { httpOnly: true, sameSite: "lax" });
    res.sendStatus(401);
    return;
  }
  jwt.verify(refreshToken, process.env.SECRET_REFRESHTOKEN, async (err) => {
    if (err) {
      return res.sendStatus(403);
    }

    const log = await usersService.LogOutUser(userId, refreshToken);
    if (log === false) {
      return res.sendStatus(401);
    } else {
      res.clearCookie("shop", { httpOnly: true, sameSite: "lax" });
      return res.sendStatus(200);
    }
  });
};
