import {dirname} from "path"
import {fileURLToPath} from "url"
//
import express,{Express} from "express";
import chalk from "chalk";
import * as dotenv from "dotenv";
import'express-async-errors';
//
import {connectDB} from "./startup/connectDB.js"
import { configMiddleware } from "./startup/configmiddleware.js";
import router from "./routes/index.js";
import { logError } from "./startup/errorhandle.js";

const filename=fileURLToPath(import.meta.url);
const __dirname=dirname(filename);
global.baseurl=__dirname;
dotenv.config({path:__dirname+"/.env"});

//create server
const server:Express=express()

//connectDB
connectDB()
//middleware
configMiddleware(express,server)
logError()
//route
server.use('/api',router)

  //listen server
  
  const PORT:number | string=process.env.NODE_ENV === "production" ? process.env.PORT || 8000 : 8080; 
  const HOSTNAME:string =process.env.NODE_ENV === "production" ? process.env.HOSTNAME || '127.0.0.1':'127.0.0.1';
  
  //LISTEN
  server.listen(Number(PORT),HOSTNAME,()=>{
      console.log(chalk.bgYellow(server.get("env")));
      console.log(chalk.bgGreen(`connected server${HOSTNAME}:${PORT}`));
    })

    //https://dev.to/macmacky/get-better-with-typescript-using-express-3ik6
    //https://snyk.io/advisor/npm-package/sequelize-typescript/functions/sequelize-typescript.BelongsTo