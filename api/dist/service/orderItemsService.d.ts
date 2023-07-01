import { Transaction } from "sequelize";
export declare const CreateOrderItems: (orderItemsData: any, t: Transaction) => Promise<false | import("../models/bo/OrderItems.js").default[]>;
export declare const GetOrderItemsByOrderId: (orderId: number, t: Transaction) => Promise<false | import("../models/bo/OrderItems.js").default>;
export declare const RemoveItemsByOrderId: (orderId: number, t: Transaction) => Promise<boolean>;
