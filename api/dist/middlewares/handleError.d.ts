import { NextFunction, Request, Response } from "express";
declare const handlerError: (err: any, req: Request, res: Response, next: NextFunction) => void;
export default handlerError;
