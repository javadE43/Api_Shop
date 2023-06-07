import { NextFunction, Request, Response } from "express";

export const ConfigUploadeMutiFiles = (req: Request, res: Response, next: NextFunction) => {
  console.log(res.charset);
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  //condition
  if (files["imageproduct"]?.length > 0) {
    const file = files["imageproduct"].map((file: Express.Multer.File) => {
      let data = file.path.replace(/\\/g, "/");
      const index = data.indexOf("uploades");
      const images = data.substring(index);
      return(`${process.env.HOSTNAME}:${process.env.PORT}/${images}`)
    });
    req.body.images = JSON.stringify(file);
  } else {
    req.body.images = null;
  }
  next();
};
