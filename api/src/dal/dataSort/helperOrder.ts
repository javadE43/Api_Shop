import { DateFind } from "../../models/bo/Order.js";

export const conditionGetOrder = (
  token: string | null,
  userId: number | null,
  orderId: number | null
) => {
  let option;

  if (token && !userId && !orderId) {
    option = { token: token };
  } else if (userId && !token && !orderId) {
    option = { userId: userId };
  } else if (orderId && !token && !userId) {
    option = { orderId: orderId };
  } else {
    option = undefined;
  }

  return option;
};
export const conditionGetOrderTodayIncome = ({ TODAY_START, now, status }: DateFind, Op: any) => {
  let option;
  console.log(TODAY_START)
  console.log(now)
  if (TODAY_START && now && status) {
    option = { [Op.and]: [{ createdAt: { [Op.between]: [TODAY_START, now] } }, { status }] };
  } else {
    option = undefined;
  }

  return option;
};
