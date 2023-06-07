import { NextFunction, Request, Response } from "express";
import logger from "../logger/index.js";
const handlerError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req?.hostname, next?.name);
  logger.error(err.message,err);
  res.status(500).json({ message: "(server error) something failed" });
};
export default handlerError;
