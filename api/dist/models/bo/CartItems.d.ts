import { Model } from "sequelize-typescript";
import { Optional } from "sequelize";
import { Products } from "../index.js";
import { AttributesProduct } from "./Product.js";
interface AttributesCartItems {
    id: number;
    productId: number;
    cartId: number;
    sku: string;
    price: number;
    discount: number;
    quantity: number;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    content: string;
}
export interface FindAttributesCartItems {
    id: number;
    productId: number;
    cartId: number;
    sku: string;
    price: number;
    discount: number;
    quantity: number;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    content: string;
    products: AttributesProduct[];
}
export interface CartItemsInput extends Optional<AttributesCartItems, "id" | "content" | "createdAt" | "updatedAt"> {
}
declare class CartItems extends Model<AttributesCartItems, CartItemsInput> {
    id: number;
    productId: number;
    cartId: number;
    price: number;
    discount: number;
    quantity: number;
    sku: string;
    active: boolean;
    content: string;
    createdAt: string;
    updatedAt: string;
    products: Products[];
}
export default CartItems;
