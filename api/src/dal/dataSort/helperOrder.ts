import {DateFindService } from "../../models/bo/Order.js";

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
export const conditionGetOrderTodayIncome = ({ TODAY_START, now,lastDate, status }: DateFindService, Op: any) => {
  let option;
  if (TODAY_START && now && status) {
    option = { [Op.and]: [{ createdAt: { [Op.between]: [TODAY_START, now] } }, { status }] };
  }
  else if (TODAY_START && lastDate && status) {
    option = { [Op.and]: [{ createdAt: { [Op.between]: [lastDate,TODAY_START] } }, { status }] };
  } 
  else {
    option = undefined;
  }

  return option;
};

interface SloatDate{
  TODAY_START?:string|null,
  now?:string|null,
  lastDate?:string|null
}

//slotDate
export const slotDate=async({TODAY_START,now,lastDate}:SloatDate)=>{
  //DATE
  let TODAY_START_DAY = new Date();
  let NOW = new Date();
  //COUSTOME DAY
  if (TODAY_START && Number(TODAY_START) > 0) {
    TODAY_START_DAY = new Date(
      TODAY_START_DAY.getTime() +( Number(TODAY_START) * 24 * 60 * 60 * 1000)
    );
  }
  
  if (TODAY_START && Number(TODAY_START) < 0) {
    TODAY_START_DAY = new Date(TODAY_START_DAY.getTime() - (Math.abs(Number(TODAY_START)) * 24 * 60 * 60 * 1000));
  }
  //COUSTOME HOURE START DAY
  TODAY_START_DAY.setUTCHours(1, 0, 0, 0);
  if (now && Number(now) < 0) {
    NOW= new Date(NOW.getTime() - (Math.abs(Number(now)) * 24 * 60 * 60 * 1000));
  }
  if (now && Number(now) > 0) {
    NOW=new Date(NOW.getTime() + (Number(now) * 24 * 60 * 60 * 1000));
  }
  //COUSTOME HOURE START DAY
  NOW.setUTCHours(24, 59, 59, 59);
  //BEFORE_DATE
  let LAST_DATE = new Date(TODAY_START_DAY);
  //LAST_DATE
  if (lastDate && Number(LAST_DATE)) {
    LAST_DATE = new Date(
      LAST_DATE.getTime() - (Math.abs(Number(lastDate)) * 24 * 60 * 60 * 1000)
    );
  }
  //LAST_DATE
  if (!lastDate) {
    LAST_DATE = new Date(LAST_DATE.getTime() - (1 * 24 * 60 * 60 * 1000));
  }
  return({TODAY_START_DAY,NOW,LAST_DATE})
}

//percentOrder
export const percentOrder=<T extends number,X extends number>(now:T,last:X)=>{
  if(!now || !last){
    return 0;

  }
   return Number((Math.abs(now-last)/((now+last)/2)*100).toFixed(0));
}