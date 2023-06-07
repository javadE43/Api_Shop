import { Router } from "express";
import { validate } from "./validate.js";
import * as controller from "../../controllers/categoryController.js";
import { UploadSingleImage } from "../../middlewares/single-upload-disk.js";
import { ConfigUploadeFile } from "../../middlewares/configUplodeSingleFile.js";
const categoryRouter = Router();

categoryRouter.post(
  "/",
  UploadSingleImage("category", "category"),
  validate.create(),
  ConfigUploadeFile,
  controller.CreateNewCategory
);
categoryRouter.get("/all-categorys", validate.GetALLCategorys(), controller.GetALLCategorys);
categoryRouter.get("/:categoryId", validate.getById(), controller.GetByIdCategory);
categoryRouter.get("/", controller.GetByTilteCategory);
categoryRouter.put(
  "/:categoryId",
  UploadSingleImage("category", "category"),
  validate.update(),
  ConfigUploadeFile,
  controller.UpdateByIdCategory
);
categoryRouter.delete("/:categoryId", validate.delete(), controller.DeleteByIdCategory);

export default categoryRouter;
