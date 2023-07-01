import * as orderDel from "../dal/orderDel.js";
import * as orderItemsService from "../service/orderItemsService.js";
import * as CartService from "../service/cartService.js";
import * as CartItemsService from "../service/cartItemsService.js";
import { sequelize } from "../models/sequelize.js";
export const CreateOrder = async (orderData, tokenCart) => {
    const result = await sequelize.transaction(async (t) => {
        orderData.status = 1003;
        orderData.token = tokenCart;
        const order = await orderDel.CreateOrder(orderData, t);
        if (typeof order === "boolean") {
            throw new Error("Request Filed");
        }
        const cart = await CartService.GetCartByToken(tokenCart, t);
        if (typeof cart === "boolean") {
            throw new Error("Request Filed");
        }
        const cartItems = await CartItemsService.FindAllItems({ cartId: cart.id, t });
        if (cartItems === false) {
            throw new Error("Request Filed");
        }
        const orderItemsData = cartItems.map(item => { return { productId: item.productId, orderId: order.id, sku: item.sku, price: item.price, discount: item.discount, quantity: item.quantity, active: item.active, content: item.content }; });
        if (orderItemsData.length < 1) {
            throw new Error("Request Filed");
        }
        const orderItems = await orderItemsService.CreateOrderItems(orderItemsData, t);
        if (orderItems === false) {
            throw new Error("Request Filed");
        }
        const cartStausUpdate = await CartService.UpdateStausCart(tokenCart, 1003, t);
        if (cartStausUpdate === false) {
            throw new Error("Request Filed");
        }
        return order.token;
    });
    return result;
};
export const FindOrder = async (token, userId, orderId) => {
    const findOrder = await orderDel.GetOrderByToken(token, userId, orderId);
    return findOrder;
};
export const DeleteOrderBYToken = async (orderId) => {
    const result = await sequelize.transaction(async (t) => {
        const removeOrderItems = await orderItemsService.RemoveItemsByOrderId(orderId, t);
        if (removeOrderItems === false) {
            throw new Error("Request Fild");
        }
        const removeOrder = await orderDel.DeleteOrderBYToken(orderId, t);
        if (removeOrder === false) {
            throw new Error("Request Fild");
        }
        return true;
    });
    return result;
};
//# sourceMappingURL=orderService.js.map