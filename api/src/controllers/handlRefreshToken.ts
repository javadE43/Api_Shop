import path, { dirname } from "path";
import { fileURLToPath } from "url";
//
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
// //
import { response } from "../helper/customResponse.js";
import  Token  from "../models/bo/Token.js";
import { getByIdUser } from "../service/userService.js";
import { createAccessToken, createRefreshToken } from "../util/jwt.js";
import { PermissionRoleUsers } from "../models/bo/User.js";
import messageResponse from "../util/messageResponse.json" assert { type: "json" };
import { cookieAuth, deleteCookie } from "../util/configCookie.js";
//
const __filename = fileURLToPath(import.meta.url);
const __direname = dirname(__filename);
dotenv.config({ path: path.join(__direname, "..", "/.env") });

//interface
interface UserInfo {
  username: string;
  role: PermissionRoleUsers;
}
interface Decoded {
  userInfo: UserInfo;
}

export const handleRefreshToken = async (req: Request, res: Response) => {
  //   //chack cookie
  const cookie = req.cookies;

  if (!cookie) {
    response({ res, message: messageResponse.handleRefreshToken[401], code: 401 });
    return;
  }
  const refreshToken: string = cookie.shop ? cookie.shop : "";
  if (!refreshToken) {
    response({ res, message: messageResponse.handleRefreshToken[401], code: 401 });
    return;
  }
  const token = await Token.findOne({ where: { name: refreshToken } });
  if (!token) {
    response({ res, message: messageResponse.handleRefreshToken[401], code: 401 });
    return;
  }
  //chack user
  const foundUser = await getByIdUser(token.toJSON().userId);

  if (typeof foundUser === "boolean") {
    response({ res, message: messageResponse.handleRefreshToken[401], code: 401 });
    return;
  }
  //remove cookie
  deleteCookie(res,"shop")

  //newAccessToken
  jwt.verify(refreshToken, process.env.SECRET_REFRESHTOKEN, async (err, decoded) => {
    if (err) {
      response({ res, message: "expired", code: 401 });
      return;
    }
    if (err || foundUser.username != (decoded as Decoded)?.userInfo.username) {
      response({ res, message: messageResponse.handleRefreshToken[401], code: 401 });
      return;
    }

    //newAccessToken
    const newAccessToken = createAccessToken(
      (decoded as Decoded).userInfo.username,
      (decoded as Decoded).userInfo.role
    );
    //newRefreshToken
    const newRefreshToken = createRefreshToken(
      (decoded as Decoded).userInfo.username,
      (decoded as Decoded).userInfo.role
    );

    //updateAccessToken
    if (token.toJSON().name == refreshToken) {
      token.name = newRefreshToken;
      await token.save();
    }

    // setNewRefreshToken
    cookieAuth(res,"shop")
    const result = {
      username: (decoded as Decoded).userInfo.username,
      accessToken: newAccessToken,
      role: (decoded as Decoded).userInfo.role,
    };

    //response
    response({
      res,
      message: messageResponse.handleRefreshToken[200],
      code: 200,
      data: result,
    });
  });
};
