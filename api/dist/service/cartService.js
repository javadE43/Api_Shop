import * as cartDel from "../dal/cartDel.js";
import { v4 as uuidv4 } from "uuid";
import { sequelize } from "../models/sequelize.js";
import * as cartItemsService from "./cartItemsService.js";
export const CreateCart = async (dataCart, dataCartItems) => {
    dataCart.token = uuidv4();
    dataCart.status = 1000;
    const result = await sequelize.transaction(async (t) => {
        const cartCreate = await cartDel.CreateCart(dataCart, t);
        if (!!cartCreate === false) {
            throw new Error("Request Filed");
        }
        const cartItemsCreate = await cartItemsService.CreateCartItems(dataCartItems, cartCreate, t);
        if (cartItemsCreate === false) {
            throw new Error("Request Filed");
        }
        return dataCart.token;
    });
    return result;
};
export const AddToCartItem = async (data, token) => {
    const result = await sequelize.transaction(async (t) => {
        const cart = await cartDel.GetCartByToken(token, t);
        if (typeof cart === "boolean") {
            throw new Error("Request Filed");
        }
        const items = await cartItemsService.AddItemsInCartByCartId(data, cart.id, t);
        if (items === false) {
            throw new Error("Request Filed");
        }
        return true;
    });
    return result;
};
export const GetCartByToken = async (token, t) => {
    const cart = await cartDel.GetCartByToken(token, t);
    if (cart === false) {
        return false;
    }
    else {
        return cart;
    }
};
export const GetCartByUserId = async (userId) => {
    const cart = await cartDel.GetCartByUserId(userId);
    if (cart === false) {
        return false;
    }
    else {
        return cart;
    }
};
export const GetAllCart = async (token, userId, cartId, offset, limit) => {
    const cart = await cartDel.GetAllCart(token, userId, cartId, offset, limit);
    if (cart === false) {
        return false;
    }
    else {
        return cart;
    }
};
export const UpdateQuantity = async (quantity, token, productId) => {
    const result = await sequelize.transaction(async (t) => {
        const cart = await cartDel.GetCartByToken(token, t);
        if (typeof cart === "boolean") {
            throw new Error("Request Filed");
        }
        const items = await cartItemsService.updateQuantityByCartIdAndProductId(quantity, cart.id, productId, t);
        if (items === false) {
            throw new Error("Request Filed");
        }
        return true;
    });
    return result;
};
export const DeleteCartByToken = async (token) => {
    const result = await sequelize.transaction(async (t) => {
        const cart = await cartDel.GetCartByToken(token, t);
        if (typeof cart === "boolean") {
            throw new Error("Request Filed");
        }
        const removeCartItems = await cartItemsService.RemoveAllItems(cart.id, t);
        if (removeCartItems === false) {
            throw new Error("Request Filed");
        }
        const removeCart = await cartDel.DeleteCart(token, t);
        if (removeCart === false) {
            throw new Error("Request Filed");
        }
        return true;
    });
    return result;
};
export const RemoveItemCart = async (token, productId) => {
    const result = await sequelize.transaction(async (t) => {
        const cart = await cartDel.GetCartByToken(token, t);
        if (typeof cart === "boolean") {
            throw new Error("Request Filed");
        }
        const items = await cartItemsService.RemoveCartItemsByCartIdAndProductID(cart.id, productId, t);
        if (items === false) {
            throw new Error("Request Filed");
        }
        const findItems = await cartItemsService.FindAllItems({ cartId: cart.id, t });
        if (findItems === false) {
            const removeCart = await cartDel.DeleteCart(token, t);
            console.log(removeCart);
            if (removeCart === false) {
                throw new Error("Request Filed");
            }
        }
        return true;
    });
    return result;
};
export const UpdateStausCart = async (token, status, t) => {
    const up = await cartDel.UpdateStausCart(token, status, t);
    return up;
};
//# sourceMappingURL=cartService.js.map