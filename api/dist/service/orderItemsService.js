import * as orderItemsDel from "../dal/orderItemsDel.js";
export const CreateOrderItems = async (orderItemsData, t) => {
    const order = await orderItemsDel.CreateOrderItems(orderItemsData, t);
    return order;
};
export const GetOrderItemsByOrderId = async (orderId, t) => {
    const order = await orderItemsDel.GetOrderItemsByOrderId(orderId, t);
    return order;
};
export const RemoveItemsByOrderId = async (orderId, t) => {
    const order = await orderItemsDel.RemoveOrderItems(orderId, t);
    return order;
};
//# sourceMappingURL=orderItemsService.js.map