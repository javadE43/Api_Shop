
import { Transaction } from "sequelize"
import  { OrderInputItems } from "../models/bo/OrderItems.js"
import {OrderItems} from "../models/index.js"

//CreateOrderItems
export const CreateOrderItems=async(data:OrderInputItems[],t:Transaction)=>{
    const orderItems=await OrderItems.bulkCreate(data,{transaction:t})
    return orderItems?orderItems:false
}

//GetOrderItemsByOrderId
export const GetOrderItemsByOrderId=async(orderId:number,t:Transaction)=>{
    const orderItems=await OrderItems.findOne({where:{orderId},transaction:t})
    return orderItems?orderItems:false
}

//RemoveOrderItems
export const RemoveOrderItems=async(orderId:number,t?:Transaction)=>{
    const orderItems=await OrderItems.destroy({where:{orderId},transaction:t?t:null})
    return !!orderItems?true:false
}