import { Transaction } from "sequelize";
import { FindOrderAttributes, FindOrderJoinOrderItems, OrderInput } from "../models/bo/Order.js";
import { Order, OrderItems, Products } from "../models/index.js";
import { conditionGetOrder } from "./dataSort/helperOrder.js";

//CreateOrder
export const CreateOrder = async (data: OrderInput, t: Transaction):Promise<FindOrderAttributes|boolean> => {
  const order = await Order.create(data, { transaction: t });
  return order ? order : false;
};

//GetOrderByToken
export const GetOrderByToken = async (
  token: string | null,
  userId: number | null,
  orderId: number | null,
  t?: Transaction
):Promise<FindOrderJoinOrderItems[] | boolean> => {
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

//DeleteOrderBYToken
export const DeleteOrderBYToken = async (orderId: number, t?: Transaction) => {
  const findOrderByToken = await Order.destroy({
    where: { id: orderId },
    transaction: t ? t : null,
  });
  return !!findOrderByToken ? true : false;
};
