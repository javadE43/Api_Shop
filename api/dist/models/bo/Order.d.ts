import { Model } from "sequelize-typescript";
import { Optional } from "sequelize";
import { OrderItems, Transaction } from "../index.js";
import { FindOrderItems } from "./OrderItems.js";
interface AttributesOrder {
    id: number;
    userId: number;
    sessionId?: number;
    token: string;
    status: number;
    subTotal: number;
    itemDiscount: number;
    tax: number;
    promo: string;
    discount: number;
    grandTotal: number;
    fullName: string;
    email: string;
    mobile: string;
    city: string;
    line1?: string;
    line2?: string;
    content?: string;
    country?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface FindOrderAttributes {
    id: number;
    userId?: number;
    token: string;
    status: number;
    subTotal: number;
    itemDiscount: number;
    tax: number;
    promo: string;
    discount: number;
    grandTotal: number;
    fullName: string;
    email: string;
    mobile: string;
    city: string;
    line1?: string;
    line2?: string;
    content?: string;
    country?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface FindOrderJoinOrderItems {
    id: number;
    userId?: number;
    token: string;
    status: number;
    subTotal: number;
    itemDiscount: number;
    tax: number;
    promo: string;
    discount: number;
    grandTotal: number;
    fullName: string;
    email: string;
    mobile: string;
    city: string;
    line1?: string;
    line2?: string;
    content?: string;
    country?: string;
    createdAt?: Date;
    updatedAt?: Date;
    orderItem: FindOrderItems[];
}
export interface OrderInput extends Optional<AttributesOrder, "id" | "sessionId"> {
}
declare class Order extends Model<OrderInput> {
    id: number;
    user: number;
    token: string;
    subTotal: number;
    itemDiscount: number;
    tax: number;
    promo: string;
    discount: number;
    grandTotal: number;
    status: number;
    fullName: string;
    email: string;
    mobile: string;
    city: string;
    line1: string;
    line2: string;
    content: string;
    country: string;
    createdAt: Date;
    updatedAt: Date;
    orderItem: OrderItems[];
    pay: Transaction[];
}
export default Order;
