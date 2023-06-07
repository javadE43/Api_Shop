import { Request } from "express"
import {dirname,join,extname} from "path";
import {fileURLToPath}from "url";
//
import multer from "multer"
import mkdir from 'mkdirp'
// import sharp from "sharp"
import { v4 as uuidv4 } from 'uuid'
//
const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename)


export const UploadSingleImage=(fieldName:string,startWithfilename:string)=>{

  const multerStorage =multer.diskStorage({
    destination(req:Request, file: Express.Multer.File, callback) {
        mkdir("./src/public/uploades/images/users").then(()=>{
            callback(null, join(__dirname,"..","/public/uploades/images/users"));
        })
        console.log(req.hostname)
        console.log(file.size)
    },
    filename(req:Request, file: Express.Multer.File, callback) {
        const ext = file.mimetype.split('/')[1];
        const filename = `${startWithfilename}-${uuidv4()}-${Date.now()}.${ext}`;
        req.body.image = filename;
        req.body.images = [];
        callback(null, filename);
    },
})
// const multerStorage = multer.memoryStorage();

const multerFilter = (req: Request,file: Express.Multer.File,cb: multer.FileFilterCallback) => {
    const fileTypes = /jpeg|jpg|png/;
    
    const size=5000000;
    const chackSize=Number(file.size) === size;
    const extName=fileTypes.test(extname(file.originalname).toLowerCase())
    const mimtype=fileTypes.test(file.mimetype)
    if (extName ===false && mimtype ===false) {
      return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE'));
    }else if(chackSize){
      return cb(new multer.MulterError('LIMIT_FILE_SIZE'));
    }
    cb(null, true);
    console.log(req.hostname)
  };
  
  const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
    limits: { fileSize: 1024 * 1024 * 5, files: 1 },
  });
  


  // export const resizePostImage = async (
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ) => {
  //   try {
  //     const file = req.file;
  //     if (!file) return next();
  
  //     const fileName = `post-${uuidv4()}-${Date.now()}.jpeg`;
  //     await sharp(req.file?.buffer)
  //       .resize(800, 450)
  //       .toFormat('png')
  //       .jpeg({ quality: 90 })
  //       .toFile(`${__dirname}/../../public/posts/single/${fileName}`);
  
  //     req.body.image = fileName;
  
  //     next();
  //   } catch (err: any) {
  //     next(err);
  //   }
  // };


  const uploadPostImageDisk = upload.single(fieldName);
  return uploadPostImageDisk
  
}