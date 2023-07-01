import { OrderItems } from "../models/index.js";
export const CreateOrderItems = async (data, t) => {
    const orderItems = await OrderItems.bulkCreate(data, { transaction: t });
    return orderItems ? orderItems : false;
};
export const GetOrderItemsByOrderId = async (orderId, t) => {
    const orderItems = await OrderItems.findOne({ where: { orderId }, transaction: t });
    return orderItems ? orderItems : false;
};
export const RemoveOrderItems = async (orderId, t) => {
    const orderItems = await OrderItems.destroy({ where: { orderId }, transaction: t ? t : null });
    return !!orderItems ? true : false;
};
//# sourceMappingURL=orderItemsDel.js.map