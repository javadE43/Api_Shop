import { NextFunction, Request, Response } from "express";

export const verifyRole = (allowRole: number[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.role)
    console.log(allowRole)
    if (!req.role || typeof req.role !=="number") {
      res.status(401).send("invalid");
      return;
    }
    if (allowRole.includes(req.role)) {
      next();
    }
  };
};
