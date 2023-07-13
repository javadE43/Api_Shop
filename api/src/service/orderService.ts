import { Transaction } from "sequelize";
// import moment from "moment";
//
import * as orderDel from "../dal/orderDel.js";
import * as orderItemsService from "../service/orderItemsService.js";
import * as CartService from "../service/cartService.js";
import * as CartItemsService from "../service/cartItemsService.js";
import { sequelize } from "../models/sequelize.js";
import { OrderInputItems } from "../models/bo/OrderItems.js";
import {
  DateFindService,
  FindOrderAttributes,
  FindOrderJoinOrderItems,
  OrderInput,
} from "../models/bo/Order.js";
import { StatusCart } from "../util/statusCart.js";
import { FindAttributesCart } from "../models/bo/Cart.js";
import { slotDate } from "../dal/dataSort/helperOrder.js";

//CreateOrder
export const CreateOrder = async (orderData: OrderInput, tokenCart: string): Promise<string> => {
  const result = await sequelize.transaction(async (t: Transaction) => {
    orderData.status = StatusCart.payment;
    orderData.token = tokenCart;
    const order: boolean | FindOrderAttributes = await orderDel.CreateOrder(orderData, t);
    if (typeof order === "boolean") {
      throw new Error("Request Filed");
    }

    const cart: boolean | FindAttributesCart = await CartService.GetCartByToken(tokenCart, t);
    if (typeof cart === "boolean") {
      throw new Error("Request Filed");
    }
    const cartItems = await CartItemsService.FindAllItems({ cartId: cart.id, t });
    if (cartItems === false) {
      throw new Error("Request Filed");
    }
    const orderItemsData: OrderInputItems[] = cartItems.map((item) => {
      return {
        productId: item.productId,
        orderId: order.id as number,
        sku: item.sku,
        price: item.price,
        discount: item.discount,
        quantity: item.quantity,
        active: item.active,
        content: item.content,
      };
    });

    if (orderItemsData.length < 1) {
      throw new Error("Request Filed");
    }
    const orderItems = await orderItemsService.CreateOrderItems(orderItemsData, t);
    if (orderItems === false) {
      throw new Error("Request Filed");
    }
    const cartStausUpdate = await CartService.UpdateStausCart(tokenCart, StatusCart.payment, t);
    if (cartStausUpdate === false) {
      throw new Error("Request Filed");
    }
    return order.token;
  });
  return result;
};

//FindOrder
export const FindOrder = async (
  token: string | null,
  userId: number | null,
  orderId: number | null
): Promise<FindOrderJoinOrderItems[] | boolean> => {
  const findOrder = await orderDel.GetOrderByToken(token, userId, orderId);
  return findOrder;
};

//DeleteOrderBYToken
export const DeleteOrderBYToken = async (orderId: number): Promise<boolean> => {
  const result = await sequelize.transaction(async (t: Transaction) => {
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

//Today's income

// export const TodaysIncome = async ({TODAY_START,now,status}: DateFindService): Promise<[{ todayIncome: number | string | null }]> => {
//   //DATE 
//   const TODAY_START_DAY = new Date();
//   const NOW = new Date();
//   //COUSTOME HOURE START DAY
//   TODAY_START_DAY.setUTCHours(0, 0, 0, 0);
//   //COUSTOME DAY
//   if(TODAY_START){TODAY_START_DAY.setUTCDate(Number(TODAY_START))}
//   if(now){NOW.setUTCDate(Number(now))}
//   //COUSTOME HOURE START DAY
//   NOW.setUTCHours(24, 59, 59, 59);
//   //DEL
//   console.log(TODAY_START_DAY)
//   console.log(NOW)
//   return await orderDel.TodaysIncome({
//     TODAY_START: TODAY_START_DAY.toISOString(),
//     now: NOW.toISOString(),
//     status: typeof status === "string" && status.includes("payment")?StatusCart.payment:status==="completed"?StatusCart.completed:status==="Paid"?StatusCart.Paid: status==="Registered"?StatusCart.Registered:StatusCart.payment
//   });
// };

// //Today's income

export async function TodaysIncome({
  TODAY_START,
  now,
  lastDate,
  status,
}: DateFindService): Promise<[{ todayIncome: number | string | null }]> {
  const {LAST_DATE,NOW,TODAY_START_DAY}=await slotDate({TODAY_START,now,lastDate});
  //DEL
  const result=await sequelize.transaction(async(t:Transaction)=>{
    return await orderDel.TodaysIncome({
      TODAY_START: TODAY_START_DAY.toISOString(),
      now: NOW.toISOString(),
      lastDate: LAST_DATE.toISOString(),
      status:
        typeof status === "string" && status.includes("payment")
          ? StatusCart.payment
          : status === "completed"
          ? StatusCart.completed
          : status === "Paid"
          ? StatusCart.Paid
          : status === "Registered"
          ? StatusCart.Registered
          : StatusCart.Paid,
    },t);
  })
  return result;
};