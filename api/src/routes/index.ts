import express from "express";
import  handlerError  from "../middlewares/handleError.js";
//
import authRouter from "./authRouter/authRouter.js";
import cartRouter from "./cartRouter/cartRouter.js";
import categoryRouter from "./category/category.js";
import OrderRoute from "./orderRoute/orderRoute.js";
import productRoute from "./products/productsRoute.js";
import roleRoute from "./roleRoute/roleRoute.js";
import transactionRoute from "./transaction/transactionRoute.js";
import userRouter from "./userRoute/userRoutes.js";
import calendarRouter from "./calendar/calendar.js";

//
const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/permission", roleRoute);
router.use("/category", categoryRouter);
router.use("/product", productRoute);
router.use("/cart", cartRouter);
router.use("/order", OrderRoute);
router.use("/pay", transactionRoute);
router.use("/calendar", calendarRouter);
router.use(handlerError)
export default router;
