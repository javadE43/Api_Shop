import { Transaction } from "sequelize";
import { OrderInputItems } from "../models/bo/OrderItems.js";
import { OrderItems } from "../models/index.js";
export declare const CreateOrderItems: (data: OrderInputItems[], t: Transaction) => Promise<false | OrderItems[]>;
export declare const GetOrderItemsByOrderId: (orderId: number, t: Transaction) => Promise<false | OrderItems>;
export declare const RemoveOrderItems: (orderId: number, t?: Transaction) => Promise<boolean>;
