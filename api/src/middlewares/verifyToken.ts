import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { response } from "../helper/customResponse.js";

interface UserInfo {
  username: string;
  role: number;
}

interface Decoded {
  userInfo: UserInfo;
}

export const verifyToken = (req: Request, res: Response,next:NextFunction) => {
  const accessToken = req.headers.authorization;
  if (!accessToken?.startsWith("Bearer ")) {
    response({
      res,
      message: "There is no token",
      code: 401,
    });
    return
  }
  const token = accessToken.split(" ")[1];
  jwt.verify(token, process.env.SECRET_ACCESSTOKEN, async (err, decoded) => {
    if (err) {
      response({
        res,
        message: "expired",
        code: 403,
      });
      return
    }
    console.log(decoded)
    req.username = (decoded as Decoded).userInfo.username;
    req.role = (decoded as Decoded).userInfo.role;
    next()
  });
};
