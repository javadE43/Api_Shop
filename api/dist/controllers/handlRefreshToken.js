import path, { dirname } from "path";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { response } from "../helper/customResponse.js";
import Token from "../models/bo/Token.js";
import { getByIdUser } from "../service/userService.js";
import { createAccessToken, createRefreshToken } from "../util/jwt.js";
import messageResponse from "../util/messageResponse.json" assert { type: "json" };
const __filename = fileURLToPath(import.meta.url);
const __direname = dirname(__filename);
dotenv.config({ path: path.join(__direname, "..", "/.env") });
export const handleRefreshToken = async (req, res) => {
    const cookie = req.cookies;
    if (!cookie) {
        response({ res, message: messageResponse.handleRefreshToken[401], code: 401 });
        return;
    }
    const refreshToken = cookie.shop ? cookie.shop : "";
    if (!refreshToken) {
        response({ res, message: messageResponse.handleRefreshToken[401], code: 401 });
        return;
    }
    const token = await Token.findOne({ where: { name: refreshToken } });
    if (!token) {
        response({ res, message: messageResponse.handleRefreshToken[401], code: 401 });
        return;
    }
    const foundUser = await getByIdUser(token.toJSON().userId);
    if (typeof foundUser === "boolean") {
        response({ res, message: messageResponse.handleRefreshToken[401], code: 401 });
        return;
    }
    res.clearCookie("shop", { httpOnly: true, sameSite: "lax" });
    jwt.verify(refreshToken, process.env.SECRET_REFRESHTOKEN, async (err, decoded) => {
        if (err) {
            response({ res, message: "expired", code: 401 });
            return;
        }
        if (err || foundUser.username != decoded?.userInfo.username) {
            response({ res, message: messageResponse.handleRefreshToken[401], code: 401 });
            return;
        }
        const newAccessToken = createAccessToken(decoded.userInfo.username, decoded.userInfo.role);
        const newRefreshToken = createRefreshToken(decoded.userInfo.username, decoded.userInfo.role);
        if (token.toJSON().name == refreshToken) {
            token.name = newRefreshToken;
            await token.save();
        }
        res.cookie("shop", newRefreshToken, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 24,
        });
        const result = {
            username: decoded.userInfo.username,
            accessToken: newAccessToken,
            role: decoded.userInfo.role,
        };
        response({
            res,
            message: messageResponse.handleRefreshToken[200],
            code: 200,
            data: result,
        });
    });
};
//# sourceMappingURL=handlRefreshToken.js.map