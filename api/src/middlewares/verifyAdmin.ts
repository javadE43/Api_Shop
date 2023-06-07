import { NextFunction, Request, Response } from "express";
import { allowRoles } from "../util/role.js";

const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  const role = req.role;
  if (!role || typeof req.role !=='number') {
    res.status(401);
    return;
  } else if (role === allowRoles.admin) {
    next();
  } else {
    res.status(400);
  }
};

export default verifyAdmin;
