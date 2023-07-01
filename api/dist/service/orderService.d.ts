import { FindOrderJoinOrderItems, OrderInput } from "../models/bo/Order.js";
export declare const CreateOrder: (orderData: OrderInput, tokenCart: string) => Promise<string>;
export declare const FindOrder: (token: string | null, userId: number | null, orderId: number | null) => Promise<FindOrderJoinOrderItems[] | boolean>;
export declare const DeleteOrderBYToken: (orderId: number) => Promise<boolean>;
