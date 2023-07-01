import path, { dirname } from "path";
import { fileURLToPath } from "url";
//
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import * as dotane from "dotenv";
//
import { Op } from "sequelize";
import Token from "../models/bo/Token.js";
import User from "../models/bo/User.js";

//
import { response } from "../helper/customResponse.js";
import messageResponse from "../util/messageResponse.json" assert { type: "json" };
import { Register } from "../service/authService.js";
import { getByUsernameAndEmail, LogOutUser, UpdateActiveUser } from "../service/userService.js";
import { createAccessToken, createRefreshToken } from "../util/jwt.js";
import { RemoveImage } from "../helper/removeImage.js";
import { cookieAuth, deleteCookie } from "../util/configCookie.js";

//
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotane.config({ path: path.join(__dirname, "..", "/.env") });

//register
export const register = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!!error.array().length) {
    RemoveImage(req.file?.path, error.array().length);
    response({ res, message: messageResponse.register[400], code: 400, data: error.array() });
    return;
  }
  const register = await Register(req.body);
  if (register === false) {
    response({ res, message: messageResponse.register[400], code: 400 });
  } else {
    response({
      res,
      message: messageResponse.register[201],
      code: 201,
      data: `Register${req.body.username}`,
    });
  }
};

//login
export const login = async (req: Request, res: Response) => {
  // validate
  const error = validationResult(req);
  if (!!error.array().length) {
    response({ res, message: messageResponse.login[400], code: 400, data: error.array() });
    return
  }
  const user = await getByUsernameAndEmail(req.body.username, req.body.email);
  if (typeof user === "boolean") {
    response({ res, message: messageResponse.login[401], code: 401 });
    return;
  }
  const accessToken = createAccessToken(user.username, user.role);
  const refreshToken = createRefreshToken(user.username, user.role);

  //ApiResponse
  const result = { username: user.username, accessToken, role: user.role };

  // chack cookie
  const cookie = req.cookies;
  if (cookie?.shop) {
    const token = await Token.findOne({
      where: { [Op.and]: [{ name: cookie.shop }, { userId: user.id }] },
    });
    if (!token) {
      deleteCookie(res, "shop");
      response({ res, message: messageResponse.login[401], code: 401 });
      return;
    }
    deleteCookie(res, "shop");
    token.name = refreshToken;
    await token.save();
    const changeActiveUser = await UpdateActiveUser(user.id, true);
    if (changeActiveUser === false) {
      response({
        res,
        message: messageResponse.getUsers[500],
        code: 500,
      });
      return;
    }
    cookieAuth(res, refreshToken);
    response({ res, message: messageResponse.login[200], code: 200, data: result });
  } else {
    //insertRefreshToken Table token
    await Token.create({ name: refreshToken, userId: user.id });
    const changeActiveUser = await UpdateActiveUser(user.id, true);
    if (changeActiveUser === false) {
      response({
        res,
        message: messageResponse.getUsers[500],
        code: 500,
      });
      return;
    }
    cookieAuth(res, refreshToken);
    response({ res, message: messageResponse.login[200], code: 200, data: result });
  }
};

//logOut

export const LogOut = async (req: Request, res: Response) => {
  const cookie = req.cookies?.shop;
  const username = req.query.username as string;
  const error = validationResult(req);
  console.log(!!error.array().length)
  console.log(error.array().length)
  console.log(error.array())
  console.log(username)
  if (!!error.array().length) {
    response({
      res,
      message: messageResponse.getUsers[400],
      code: 400,
      data: error.array(),
    });
    return;
  }
  const user = await User.findOne({ where: { username }, attributes: ["id"] });

  if (!user?.id || user === null) {
    response({
      res,
      message: messageResponse.getUsers[403],
      code: 403,
    });
    return;
  }
  const logt = await LogOutUser(user.id, cookie);

  if (logt === false) {
    response({
      res,
      message: messageResponse.getUsers[401],
      code: 401,
    });
    return;
  }
  deleteCookie(res, "shop");
  response({
    res,
    message: messageResponse.getUsers[200],
    code: 200,
  });
};
