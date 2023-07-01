import express from "express";
import * as userController from "../../controllers/UserController.js";
import { verifyRole } from "../../middlewares/verifyRole.js";
import { verifyToken } from "../../middlewares/verifyToken.js";
import { validate } from "./validate.js";
import { UploadSingleImage } from "../../middlewares/single-upload-disk.js";
import { ConfigUploadeFile } from "../../middlewares/configUplodeSingleFile.js";
const userRoute = express.Router();
userRoute.post("/", UploadSingleImage("user", "profile"), verifyToken, verifyRole([30]), validate.create(), ConfigUploadeFile, userController.create);
userRoute.put("/:userId", UploadSingleImage("user", "profile"), verifyToken, verifyRole([30]), validate.update(), ConfigUploadeFile, userController.updateUser);
userRoute.get("/logout/:userId", verifyToken, verifyRole([30]), validate.LogOutUser(), userController.LogOutUser);
userRoute.get("/:userId", verifyToken, verifyRole([30, 14]), validate.getByIdUser(), userController.getByIdUser);
userRoute.get("/", verifyToken, verifyRole([30, 14]), validate.pagintionUsers(), userController.getUser);
userRoute.delete("/multiusers", verifyToken, verifyRole([30]), validate.removeMultipleUsers(), userController.removeMultipleUsers);
userRoute.delete("/:userId", verifyToken, verifyRole([30]), validate.deleteByIdUser(), userController.removeUser);
export default userRoute;
//# sourceMappingURL=userRoutes.js.map