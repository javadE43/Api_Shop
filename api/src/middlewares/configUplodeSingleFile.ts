import { NextFunction, Request, Response } from "express";

export const ConfigUploadeFile=(req:Request,res:Response,next:NextFunction)=>{
    process.env.NODE_ENV=== "development" && res.charset
    if (req.file) {
        let data = req.file.path.replace(/\\/g, "/")
         const index=data.indexOf("uploades");
         const file=data.substring(index)
        req.body.image = `${process.env.HOSTNAME}:${process.env.PORT}/${file}`;
      } else {
        req.body.image = null;
      }
  next()
}