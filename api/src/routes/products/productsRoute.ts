import { Router } from "express";
import * as controller from "../../controllers/productController.js";
import { ConfigUploadeMutiFiles } from "../../middlewares/configUplodeMultiFiles.js";
import { uploadesProductImagesGallery } from "../../middlewares/multiFile-uploades-disk.js";
import { validate } from "./validate.js";

const productRoute = Router();

productRoute.post(
  "/",
  uploadesProductImagesGallery,
  validate.create(),
  ConfigUploadeMutiFiles,
  controller.createProduct
);
productRoute.get(
  "/join-pro-cate",
  validate.validateQueryProductIdAndCategoryId(),
  controller.insertProductOnCategory
);
productRoute.get(
  "/searchtitle",
  validate.validateQuerySearchProduct(),
  controller.getProductsByTitle
);
productRoute.get("/:productId",validate.validateParamProductId(), controller.getProductById);
productRoute.put("/:productId", uploadesProductImagesGallery, validate.update(), ConfigUploadeMutiFiles,controller.UpdateProductById);
productRoute.delete("/:productId", validate.validateParamProductId(), controller.DeleteProductById);

export default productRoute;
