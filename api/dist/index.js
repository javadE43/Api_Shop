import { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
import chalk from "chalk";
import * as dotenv from "dotenv";
import 'express-async-errors';
import { connectDB } from "./startup/connectDB.js";
import { configMiddleware } from "./startup/configmiddleware.js";
import router from "./routes/index.js";
import { logError } from "./startup/errorhandle.js";
const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);
global.baseurl = __dirname;
dotenv.config({ path: __dirname + "/.env" });
const server = express();
connectDB();
configMiddleware(express, server);
logError();
server.use('/api', router);
const PORT = process.env.NODE_ENV === "production" ? process.env.PORT || 8000 : 8080;
const HOSTNAME = process.env.NODE_ENV === "production" ? process.env.HOSTNAME || '127.0.0.1' : '127.0.0.1';
server.listen(Number(PORT), HOSTNAME, () => {
    console.log(chalk.bgYellow(server.get("env")));
    console.log(chalk.bgGreen(`connected server${HOSTNAME}:${PORT}`));
});
//# sourceMappingURL=index.js.map