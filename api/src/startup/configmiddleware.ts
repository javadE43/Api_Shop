import {dirname,join} from "path";
import {fileURLToPath}from "url";
import {Express} from "express";
import cors from "cors";
import morgan from "morgan"
import cookieParser from "cookie-parser";


const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename)
//
import {corsOrigin} from "../config/corsOrigin.js"
import { credentials } from "../middlewares/credentials.js";

//
export const configMiddleware = (express: any, server: Express) => {
  server.use(morgan('tiny'))
  server.use(cookieParser())
  server.use(credentials);
  server.use(cors(corsOrigin));
  server.use(express.static(join(__dirname,"..","/public")));
  
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
};
