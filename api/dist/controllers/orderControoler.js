import { validationResult } from "express-validator";
import { response } from "../helper/customResponse.js";
import * as orderService from "../service/orderService.js";
export const CreateOrder = async (req, res) => {
    const tokenCart = req.query?.tokenCart;
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: " ",
            code: 400,
            data: error.array(),
        });
        return;
    }
    const result = await orderService.CreateOrder(req.body, tokenCart);
    if (result) {
        response({
            res,
            message: " ",
            code: 201,
            data: result,
        });
    }
};
export const FindOrder = async (req, res) => {
    const token = req.query?.tokenCart ? req.query?.tokenCart : null;
    const userId = req.query?.userId ? Number(req.query.userId) : null;
    const orderId = req.query?.orderId ? Number(req.query.orderId) : null;
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: " ",
            code: 400,
            data: error.array(),
        });
        return;
    }
    const result = await orderService.FindOrder(token, userId, orderId);
    if (typeof result === "boolean") {
        response({
            res,
            message: " ",
            code: 403,
        });
    }
    else {
        response({
            res,
            message: " ",
            code: 200,
            data: result,
        });
    }
};
export const DeleteOrderById = async (req, res) => {
    const orderId = Number(req.query.orderId);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: " ",
            code: 400,
            data: error.array(),
        });
        return;
    }
    const result = await orderService.DeleteOrderBYToken(orderId);
    if (result) {
        response({
            res,
            message: " ",
            code: 200,
            data: result,
        });
    }
};
//# sourceMappingURL=orderControoler.js.map