import { validationResult } from "express-validator";
import _ from "lodash";
import messageResponse from "../util/messageResponse.json" assert { type: "json" };
import * as cartService from "../service/cartService.js";
import { response } from "../helper/customResponse.js";
import { cookieCart } from "../util/configCookie.js";
import { getPagination } from "../dal/dataSort/pagination.js";
export const createCart = async (req, res) => {
    const cart = _.omit(req.body, "cartItems");
    const cartItems = req.body.cartItems;
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.cart[400],
            code: 400,
            data: error.array(),
        });
        return;
    }
    const result = await cartService.CreateCart(cart, cartItems);
    if (result) {
        cookieCart(res, result);
        response({
            res,
            message: messageResponse.cart[201],
            code: 201,
        });
    }
};
export const AddItemInCart = async (req, res) => {
    const tokenCart = req.cookies?.cart ? req.cookies?.cart : req.query?.tokenCart;
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.cart[400],
            code: 400,
            data: error.array(),
        });
        return;
    }
    if (!tokenCart) {
        response({
            res,
            message: messageResponse.cart[400],
            code: 400,
        });
    }
    const result = await cartService.AddToCartItem(req.body, tokenCart);
    if (result) {
        response({
            res,
            message: messageResponse.cart[201],
            code: 201,
        });
    }
};
export const UpdateQuantity = async (req, res) => {
    const tokenCart = req.cookies?.cart ? req.cookies?.cart : req.query?.tokenCart;
    const productId = Number(req.query.productId);
    const quantity = Number(req.query.quantity);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.cart[400],
            code: 400,
            data: error.array(),
        });
        return;
    }
    if (!tokenCart) {
        response({
            res,
            message: messageResponse.cart[400],
            code: 400,
        });
    }
    const result = await cartService.UpdateQuantity(quantity, tokenCart, productId);
    if (result) {
        response({
            res,
            message: messageResponse.cart[200],
            code: 200,
        });
    }
};
export const GetCartByToken = async (req, res) => {
    const tokenCart = req.cookies?.cart;
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.cart[400],
            code: 400,
            data: error.array(),
        });
        return;
    }
    const result = await cartService.GetCartByToken(tokenCart);
    if (typeof result !== "boolean") {
        response({
            res,
            message: messageResponse.cart[200],
            code: 200,
            data: result,
        });
    }
    else {
        response({
            res,
            message: messageResponse.cart[500],
            code: 500,
        });
    }
};
export const GetCartByUserId = async (req, res) => {
    const userId = Number(req.query.userId);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.cart[400],
            code: 400,
            data: error.array(),
        });
        return;
    }
    const result = await cartService.GetCartByUserId(userId);
    if (typeof result !== "boolean") {
        response({
            res,
            message: messageResponse.cart[200],
            code: 200,
            data: result,
        });
    }
    else {
        response({
            res,
            message: messageResponse.cart[500],
            code: 500,
        });
    }
};
export const GetAllCart = async (req, res) => {
    const tokenCart = req.query?.tokenCart ? req.query?.tokenCart : null;
    const userId = req.query.userId ? Number(req.query.userId) : null;
    const cartId = req.query.cartId ? Number(req.query.cartId) : null;
    const size = req.query.size ? Number(req.query.size) : 1;
    const page = req.query.page ? Number(req.query.page) : 0;
    const { offset, limit } = getPagination(page, size);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.cart[400],
            code: 400,
            data: error.array(),
        });
        return;
    }
    const result = await cartService.GetAllCart(tokenCart, userId, cartId, offset, limit);
    if (typeof result !== "boolean") {
        response({
            res,
            message: messageResponse.cart[200],
            code: 200,
            data: result.data,
            count: result.count,
            totalPages: result.totalPages,
            currentPage: result.currentPage,
            nextPage: result.nextPage,
            previousPage: result.previousPage
        });
    }
    else {
        response({
            res,
            message: messageResponse.cart[500],
            code: 500,
        });
    }
};
export const RemoveItemCart = async (req, res) => {
    const tokenCart = req.cookies?.cart ? req.cookies?.cart : req.query?.tokenCart;
    const productId = Number(req.query.productId);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.cart[400],
            code: 400,
            data: error.array(),
        });
        return;
    }
    if (!tokenCart) {
        response({
            res,
            message: messageResponse.cart[400],
            code: 400,
        });
    }
    const result = await cartService.RemoveItemCart(tokenCart, productId);
    if (result) {
        response({
            res,
            message: messageResponse.cart[200],
            code: 200,
            data: result,
        });
    }
};
export const DeleteCartByToken = async (req, res) => {
    const tokenCart = req.cookies?.cart ? req.cookies?.cart : req.query?.tokenCart;
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.cart[400],
            code: 400,
            data: error.array(),
        });
        return;
    }
    if (!tokenCart) {
        response({
            res,
            message: messageResponse.cart[400],
            code: 400,
        });
    }
    const result = await cartService.DeleteCartByToken(tokenCart);
    if (result) {
        response({
            res,
            message: messageResponse.cart[200],
            code: 200,
            data: result,
        });
    }
};
//# sourceMappingURL=cartController.js.map