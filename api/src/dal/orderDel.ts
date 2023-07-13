import { Op, Transaction } from "sequelize";
import { DateFind, FindOrderAttributes, FindOrderJoinOrderItems, OrderInput } from "../models/bo/Order.js";
import { Order, OrderItems, Products } from "../models/index.js";
import { conditionGetOrder, conditionGetOrderTodayIncome, percentOrder } from "./dataSort/helperOrder.js";
import { sequelize } from "../models/sequelize.js";

//CreateOrder
export const CreateOrder = async (
  data: OrderInput,
  t: Transaction
): Promise<FindOrderAttributes | boolean> => {
  const order = await Order.create(data, { transaction: t });
  return order ? order : false;
};

//GetOrderByToken
export const GetOrderByToken = async (
  token: string | null,
  userId: number | null,
  orderId: number | null,
  t?: Transaction
): Promise<FindOrderJoinOrderItems[] | boolean> => {
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

//Today's income
export const TodaysIncome = async ({TODAY_START,now,lastDate,status}:DateFind,t:Transaction):Promise<[{todayIncome:number,percent:number}]> => {
  const incomeNow:[{todayIncome:number|string|null}]|Order[] = await Order.findAll({
    attributes: [[sequelize.fn("sum", sequelize.col("grandTotal")), "todayIncome"]],
    where: conditionGetOrderTodayIncome({TODAY_START,now,status},Op),
    raw: true,
    transaction:t
  });
  const lastIncome:[{todayIncome:number|string|null}]|Order[] = await Order.findAll({
    attributes: [[sequelize.fn("sum", sequelize.col("grandTotal")), "todayIncome"]],
    where: conditionGetOrderTodayIncome({lastDate,TODAY_START,status},Op),
    raw: true,
    transaction:t
  });
  //
  const inmToday=JSON.parse(JSON.stringify(incomeNow[0]))
  const lastInm=JSON.parse(JSON.stringify(lastIncome[0]))
  //
  if (!inmToday?.todayIncome) {
    return [{todayIncome:0,percent:0}];
  } else {
    return [{...inmToday,percent:percentOrder<number,number>(inmToday.todayIncome,lastInm.todayIncome)}];
  }
};
