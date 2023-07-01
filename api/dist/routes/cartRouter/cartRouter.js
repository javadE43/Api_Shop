import { Router } from "express";
import * as controller from "../../controllers/cartController.js";
import { validate } from "./validate.js";
const cartRouter = Router();
cartRouter.post("/item", validate.AddToCartItem(), controller.AddItemInCart);
cartRouter.post("/", validate.create(), controller.createCart);
cartRouter.put("/", validate.UpdateQuantity(), controller.UpdateQuantity);
cartRouter.get("/find", validate.GetAllCart(), controller.GetAllCart);
cartRouter.delete("/find", validate.RemoveItemCart(), controller.RemoveItemCart);
cartRouter.delete("/", validate.DeleteCartByToken(), controller.DeleteCartByToken);
export default cartRouter;
//# sourceMappingURL=cartRouter.js.map