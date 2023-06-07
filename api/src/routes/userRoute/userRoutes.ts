import express from "express";
import * as userController from "../../controllers/UserController.js";
import { verifyRole } from "../../middlewares/verifyRole.js";
import { verifyToken } from "../../middlewares/verifyToken.js";
import { allowRoles } from "../../util/role.js";
import { validate } from "./validate.js";
import { UploadSingleImage } from "../../middlewares/single-upload-disk.js";
import { ConfigUploadeFile } from "../../middlewares/configUplodeSingleFile.js";
const userRoute = express.Router();

userRoute.post(
  "/",
  UploadSingleImage("user","profile"),
  verifyToken,
  verifyRole([allowRoles.admin]),
  validate.create(),
  ConfigUploadeFile,
  userController.create
);
userRoute.put(
  "/:userId",
  UploadSingleImage("user","profile"),
  verifyToken,
  verifyRole([allowRoles.admin]),
  validate.update(),
  ConfigUploadeFile,
  userController.updateUser
);
userRoute.get(
  "/logout/:userId",
  verifyToken,
  verifyRole([allowRoles.admin]),
  validate.LogOutUser(),
  userController.LogOutUser
);
userRoute.get(
  "/:userId",
  verifyToken,
  verifyRole([allowRoles.admin, allowRoles.edite]),
  validate.getByIdUser(),
  userController.getByIdUser
);
userRoute.get(
  "/",
  verifyToken,
  verifyRole([allowRoles.admin, allowRoles.edite]),
  validate.pagintionUsers(),
  userController.getUser
);
userRoute.delete(
  "/multiusers",
  verifyToken,
  verifyRole([allowRoles.admin]),
  validate.removeMultipleUsers(),
  userController.removeMultipleUsers
);
userRoute.delete(
  "/:userId",
  verifyToken,
  verifyRole([allowRoles.admin]),
  validate.deleteByIdUser(),
  userController.removeUser
);

export default userRoute;
