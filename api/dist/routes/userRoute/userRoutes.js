import express from "express";
import * as userController from "../../controllers/UserController.js";
import { ConfigUploadeFile } from "../../middlewares/configUplodeFile.js";
import { verifyRole } from "../../middlewares/verifyRole.js";
import { verifyToken } from "../../middlewares/verifyToken.js";
import { validate } from "./validate.js";
const userRoute = express.Router();
userRoute.post("/", verifyToken, verifyRole([30]), validate.create(), ConfigUploadeFile, userController.create);
userRoute.put("/:userId", verifyToken, verifyRole([30]), validate.update(), ConfigUploadeFile, userController.updateUser);
userRoute.get("/logout/:userId", validate.LogOutUser(), userController.LogOutUser);
userRoute.get("/:userId", validate.getByIdUser(), userController.getByIdUser);
userRoute.get("/", validate.pagintionUsers(), userController.getUser);
userRoute.delete("/multiusers", validate.removeMultipleUsers(), userController.removeMultipleUsers);
userRoute.delete("/:userId", validate.deleteByIdUser(), userController.removeUser);
export default userRoute;
//# sourceMappingURL=userRoutes.js.map