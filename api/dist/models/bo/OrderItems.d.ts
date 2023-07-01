import { Model } from "sequelize-typescript";
import { Optional } from "sequelize";
import { Products } from "../index.js";
import { AttributesProduct } from "./Product.js";
interface AttributesOrderItems {
    id: number;
    productId: number;
    orderId: number;
    sku: string;
    discount: number;
    price: number;
    quantity: number;
    content?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface FindOrderItems {
    id: number;
    productId: number;
    orderId: number;
    sku: string;
    discount: number;
    price: number;
    quantity: number;
    content?: string;
    createdAt?: Date;
    updatedAt?: Date;
    products: AttributesProduct[];
}
export interface OrderInputItems extends Optional<AttributesOrderItems, "id"> {
}
declare class OrderItems extends Model<OrderInputItems> {
    id: number;
    productId: number;
    orderId: number;
    sku: string;
    price: number;
    discount: number;
    quantity: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    products: Products[];
}
export default OrderItems;
