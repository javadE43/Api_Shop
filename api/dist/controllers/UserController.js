import { validationResult } from "express-validator";
import { response } from "../helper/customResponse.js";
import messageResponse from "../util/messageResponse.json" assert { type: "json" };
import * as usersService from "../service/userService.js";
import { getPagination } from "../helper/pagination.js";
import { GetTokenByNameAndUserId } from "../service/tokenService.js";
import jwt from 'jsonwebtoken';
export const create = async (req, res) => {
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.postAndUpdateUsers[401],
            code: 400,
            data: error.array(),
        });
        return;
    }
    const newUser = await usersService.create(req.body);
    if (newUser === false) {
        response({
            res,
            message: messageResponse.postAndUpdateUsers[400],
            code: 400,
        });
    }
    else {
        response({
            res,
            message: messageResponse.postAndUpdateUsers[201],
            code: 201,
            data: req.body.username,
        });
    }
};
export const getUser = async (req, res) => {
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.getUsers[401],
            code: 401,
            data: error.array()
        });
        return;
    }
    const size = req.query.size ? Number(req.query.size) : 1;
    const page = req.query.page ? Number(req.query.page) : 0;
    const condition = req.query?.username ? req.query.username : null;
    const role = req.query?.role ? req.query.role : null;
    const { offset, limit } = getPagination(page, size);
    const users = await usersService.getAllUsers(offset, limit, condition, role);
    if (users === false) {
        response({
            res,
            message: messageResponse.getUsers[400],
            code: 400,
            data: users,
        });
    }
    else if (typeof users !== "boolean") {
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
export const getByIdUser = async (req, res) => {
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
    }
    else {
        response({
            res,
            message: messageResponse.getUsers[200],
            code: 200,
            data: user,
        });
    }
};
export const updateUser = async (req, res) => {
    const error = validationResult(req);
    const id = Number(req.params.userId);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.postAndUpdateUsers[401],
            code: 401,
            data: error.array(),
        });
        return;
    }
    const update = await usersService.updata(id, req.body);
    if (update === false) {
        response({
            res,
            message: messageResponse.postAndUpdateUsers[400],
            code: 400,
        });
    }
    else {
        response({
            res,
            message: messageResponse.postAndUpdateUsers[200],
            code: 200,
            data: update,
        });
    }
};
export const removeUser = async (req, res) => {
    const id = Number(req.params.userId);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.getUsers[400],
            code: 400,
            data: error.array()
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
    }
    else {
        response({
            res,
            message: messageResponse.getUsers[200],
            code: 200,
            data: remove,
        });
    }
};
export const removeMultipleUsers = async (req, res) => {
    const id = req.body.userIds;
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.getUsers[400],
            code: 400,
            data: error.array()
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
    }
    else {
        response({
            res,
            message: messageResponse.getUsers[200],
            code: 200,
            data: remove,
        });
    }
};
export const LogOutUser = async (req, res) => {
    const userId = Number(req.params.userId);
    const cookie = req.cookies;
    if (!cookie?.shop) {
        res.sendStatus(401);
        return;
    }
    const refreshToken = cookie?.shop;
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
        }
        else {
            res.clearCookie("shop", { httpOnly: true, sameSite: "lax" });
            return res.sendStatus(200);
        }
    });
};
//# sourceMappingURL=UserController.js.map