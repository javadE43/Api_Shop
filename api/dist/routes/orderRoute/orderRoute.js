import { Router } from "express";
import * as controller from "../../controllers/orderControoler.js";
const OrderRoute = Router();
OrderRoute.post("/", controller.CreateOrder);
OrderRoute.get("/", controller.FindOrder);
OrderRoute.delete("/", controller.DeleteOrderById);
export default OrderRoute;
//# sourceMappingURL=orderRoute.js.map