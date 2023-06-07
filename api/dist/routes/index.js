import express from "express";
import handlerError from "../middlewares/handleError.js";
import authRouter from "./authRouter/authRouter.js";
import categoryRouter from "./category/category.js";
import productRoute from "./products/productsRoute.js";
import roleRoute from "./roleRoute/roleRoute.js";
import userRouter from "./userRoute/userRoutes.js";
const router = express.Router();
router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/permission", roleRoute);
router.use("/category", categoryRouter);
router.use("/product", productRoute);
router.use(handlerError);
export default router;
//# sourceMappingURL=index.js.map