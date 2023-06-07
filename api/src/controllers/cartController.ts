import { Request, Response } from "express";
//
import { validationResult } from "express-validator";
import _ from "lodash";
//
import messageResponse from "../util/messageResponse.json" assert { type: "json" };
import * as cartService from "../service/cartService.js";
import { response } from "../helper/customResponse.js";
import { CartItemsInput } from "../models/bo/CartItems.js";
import { CartInput, FindAttributesCart } from "../models/bo/Cart.js";
import { cookieCart } from "../util/configCookie.js";
import { getPagination, PaginationData } from "../dal/dataSort/pagination.js";

//createCart
export const createCart = async (req: Request, res: Response) => {
  const cart = _.omit(req.body, "cartItems") as CartInput;
  const cartItems: CartItemsInput[] = req.body.cartItems;
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

  const result: string = await cartService.CreateCart(cart, cartItems);
  if (result) {
    cookieCart(res, result);
    response({
      res,
      message: messageResponse.cart[201],
      code: 201,
    });
  }
};
//AddItemInCart
export const AddItemInCart = async (req: Request, res: Response) => {
  const tokenCart: string = req.cookies?.cart ? req.cookies?.cart : req.query?.tokenCart;
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
  const result: boolean = await cartService.AddToCartItem(req.body, tokenCart);
  if (result) {
    response({
      res,
      message: messageResponse.cart[201],
      code: 201,
    });
  }
};
//UpdateQuantity
export const UpdateQuantity = async (req: Request, res: Response) => {
  const tokenCart: string = req.cookies?.cart ? req.cookies?.cart : req.query?.tokenCart;
  const productId = Number(req.query.productId) as number;
  const quantity = Number(req.query.quantity) as number;
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
  const result: boolean = await cartService.UpdateQuantity(quantity, tokenCart, productId);
  if (result) {
    response({
      res,
      message: messageResponse.cart[200],
      code: 200,
    });
  }
};
//GetCartByToken
export const GetCartByToken = async (req: Request, res: Response) => {
  const tokenCart: string = req.cookies?.cart;
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

  const result:boolean|FindAttributesCart= await cartService.GetCartByToken(tokenCart);
  if (typeof result !== "boolean") {
    response({
      res,
      message: messageResponse.cart[200],
      code: 200,
      data: result,
    });
  } else {
    response({
      res,
      message: messageResponse.cart[500],
      code: 500,
    });
  }
};
//GetCartByUserId
export const GetCartByUserId = async (req: Request, res: Response) => {
  const userId = Number(req.query.userId) as number;
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

  const result:boolean|FindAttributesCart = await cartService.GetCartByUserId(userId);
  if (typeof result !== "boolean") {
    response({
      res,
      message: messageResponse.cart[200],
      code: 200,
      data: result,
    });
  } else {
    response({
      res,
      message: messageResponse.cart[500],
      code: 500,
    });
  }
};
//GetAllCart
export const GetAllCart = async (req: Request, res: Response) => {
  const tokenCart = req.query?.tokenCart?req.query?.tokenCart as string:null
  const userId = req.query.userId?Number(req.query.userId) as number:null
  const cartId = req.query.cartId?Number(req.query.cartId) as number:null
  const size = req.query.size?Number(req.query.size) as number:1
  const page = req.query.page?Number(req.query.page) as number:0
  const{offset,limit}=getPagination(page,size)

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

  const result: boolean | PaginationData = await cartService.GetAllCart(tokenCart, userId,cartId,offset,limit);
  if (typeof result !== "boolean") {
    response({
      res,
      message: messageResponse.cart[200],
      code: 200,
      data: result.data,
      count:result.count,
      totalPages:result.totalPages,
      currentPage:result.currentPage,
      nextPage:result.nextPage,
      previousPage:result.previousPage
    });
  } else {
    response({
      res,
      message: messageResponse.cart[500],
      code: 500,
    });
  }
};
//RemoveItemCart
export const RemoveItemCart = async (req: Request, res: Response) => {
  const tokenCart: string = req.cookies?.cart ? req.cookies?.cart : req.query?.tokenCart;
  const productId: number = Number(req.query.productId);
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
  const result: boolean = await cartService.RemoveItemCart(tokenCart, productId);
  if (result) {
    response({
      res,
      message: messageResponse.cart[200],
      code: 200,
      data: result,
    });
  }
};
//DeleteCartByToken
export const DeleteCartByToken = async (req: Request, res: Response) => {
  const tokenCart: string = req.cookies?.cart ? req.cookies?.cart : req.query?.tokenCart;
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
  const result: boolean = await cartService.DeleteCartByToken(tokenCart);
  if (result) {
    response({
      res,
      message: messageResponse.cart[200],
      code: 200,
      data: result,
    });
  }
};
