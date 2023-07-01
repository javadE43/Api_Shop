import { Order, OrderItems, Products } from "../models/index.js";
import { conditionGetOrder } from "./dataSort/helperOrder.js";
export const CreateOrder = async (data, t) => {
    const order = await Order.create(data, { transaction: t });
    return order ? order : false;
};
export const GetOrderByToken = async (token, userId, orderId, t) => {
    const findOrderByToken = await Order.findAll({
        where: conditionGetOrder(token, userId, orderId),
        include: [
            {
                model: OrderItems,
                include: [
                    {
                        model: Products,
                    },
                ],
            },
        ],
        transaction: t ? t : null,
    });
    return findOrderByToken ? findOrderByToken : false;
};
export const DeleteOrderBYToken = async (orderId, t) => {
    const findOrderByToken = await Order.destroy({
        where: { id: orderId },
        transaction: t ? t : null,
    });
    return !!findOrderByToken ? true : false;
};
//# sourceMappingURL=orderDel.js.map