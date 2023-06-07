import express from "express";
import * as controller from "../../controllers/authController.js";
import { handleRefreshToken } from "../../controllers/handlRefreshToken.js";
import { ConfigUploadeFile } from "../../middlewares/configUplodeFile.js";
import { uploadPostImageDisk } from "../../middlewares/single-upload-disk.js";
import { validate } from "./validate.js";
const authRouter = express.Router();
authRouter.post('/register', uploadPostImageDisk, validate.register(), ConfigUploadeFile, controller.register);
authRouter.post('/login', validate.login(), controller.login);
authRouter.get('/refreshtoken', handleRefreshToken);
export default authRouter;
//# sourceMappingURL=authRouter.js.map