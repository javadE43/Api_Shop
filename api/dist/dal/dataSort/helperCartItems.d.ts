import { Transaction } from "sequelize";
export declare const conditionGetAllCartItems: (token?: string, cartId?: number) => any;
export interface FindAllItemsParams {
    cartId?: number;
    token?: string;
    t?: Transaction;
}
