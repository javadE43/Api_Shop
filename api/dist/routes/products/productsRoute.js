import { Router } from "express";
import * as controller from "../../controllers/productController.js";
const productRoute = Router();
productRoute.post("/", controller.createProduct);
productRoute.get("/join-pro-cate", controller.insertProductOnCategory);
productRoute.get("/searchtitle", controller.getProductsByTitle);
productRoute.get("/:productId", controller.getProductById);
productRoute.put("/:productId", controller.UpdateProductOnCategory);
export default productRoute;
//# sourceMappingURL=productsRoute.js.map