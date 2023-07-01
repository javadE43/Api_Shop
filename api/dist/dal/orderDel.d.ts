import { Transaction } from "sequelize";
import { FindOrderAttributes, FindOrderJoinOrderItems, OrderInput } from "../models/bo/Order.js";
export declare const CreateOrder: (data: OrderInput, t: Transaction) => Promise<FindOrderAttributes | boolean>;
export declare const GetOrderByToken: (token: string | null, userId: number | null, orderId: number | null, t?: Transaction) => Promise<FindOrderJoinOrderItems[] | boolean>;
export declare const DeleteOrderBYToken: (orderId: number, t?: Transaction) => Promise<boolean>;
