import { NextFunction, Request, Response } from "express";
import { allowOrigine } from "../config/allowOrigine.js";

export const credentials = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const origin = req.headers.origin;
  if (origin)
    if (allowOrigine.includes(origin)) {
      res.header("Access-Control-Allow-Credentials", "true");
    }
  next();
};
