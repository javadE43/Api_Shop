import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { validationResult } from "express-validator";
import * as dotane from "dotenv";
import { Op } from "sequelize";
import Token from "../models/bo/Token.js";
import { response } from "../helper/customResponse.js";
import messageResponse from "../util/messageResponse.json" assert { type: "json" };
import { Register } from "../service/authService.js";
import { getByUsernameAndEmail, UpdateActiveUser } from "../service/userService.js";
import { createAccessToken, createRefreshToken } from "../util/jwt.js";
import { RemoveImage } from "../helper/removeImage.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotane.config({ path: path.join(__dirname, "..", "/.env") });
export const register = async (req, res) => {
    const error = validationResult(req);
    if (!!error.array().length) {
        RemoveImage(req.file?.path, error.array().length);
        response({ res, message: messageResponse.register[400], code: 400, data: error.array() });
        return;
    }
    const register = await Register(req.body);
    if (register === false) {
        response({ res, message: messageResponse.register[400], code: 400 });
    }
    else {
        response({
            res,
            message: messageResponse.register[201],
            code: 201,
            data: `Register${req.body.username}`,
        });
    }
};
export const login = async (req, res) => {
    const error = validationResult(req);
    if (!error.array()) {
        response({ res, message: messageResponse.login[400], code: 400, data: error.array() });
        return;
    }
    const user = await getByUsernameAndEmail(req.body.username, req.body.email);
    if (typeof user === "boolean") {
        response({ res, message: messageResponse.login[401], code: 401 });
        return;
    }
    const accessToken = createAccessToken(user.username, user.role);
    const refreshToken = createRefreshToken(user.username, user.role);
    const result = { username: user.username, accessToken, role: user.role };
    const cookie = req.cookies;
    if (cookie?.shop) {
        const token = await Token.findOne({
            where: { [Op.and]: [{ name: cookie.shop }, { userId: user.id }] },
        });
        if (!token) {
            res.clearCookie("shop", { httpOnly: true, sameSite: "lax" });
            response({ res, message: messageResponse.login[401], code: 401 });
            return;
        }
        res.clearCookie("shop", { httpOnly: true, sameSite: "lax" });
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
        res.cookie("shop", refreshToken, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 24,
        });
        response({ res, message: messageResponse.login[200], code: 200, data: result });
    }
    else {
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
        res.cookie("shop", refreshToken, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 24,
        });
        response({ res, message: messageResponse.login[200], code: 200, data: result });
    }
};
//# sourceMappingURL=authController.js.map