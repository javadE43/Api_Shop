import { Transaction } from "sequelize"
import * as orderItemsDel from "../dal/orderItemsDel.js"

//CreateOrderItems
export const CreateOrderItems=async(orderItemsData:any,t:Transaction)=>{
    const order=await orderItemsDel.CreateOrderItems(orderItemsData,t)
    return order  
}

//GetOrderItemsByOrderId
export const GetOrderItemsByOrderId=async(orderId:number,t:Transaction)=>{
    const order=await orderItemsDel.GetOrderItemsByOrderId(orderId,t)
    return order  
}

//RemoveItemsByOrderId
export const RemoveItemsByOrderId=async(orderId:number,t:Transaction)=>{
    const order=await orderItemsDel.RemoveOrderItems(orderId,t)
    return order  
}

