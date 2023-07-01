import { Model } from "sequelize-typescript";
import { Optional } from "sequelize";
import { CartItems, User } from "../index.js";
import { FindAttributesCartItems } from "./CartItems.js";
import { FindUserAttributesInCart } from "./User.js";
interface AttributesCart {
    id: number;
    userId: number;
    sessionId: string;
    token: string;
    status: number;
    fullName: string;
    mobile: string;
    email: string;
    lin1: string;
    lin2: string;
    city: string;
    province: string;
    country: string;
    createdAt: string;
    updatedAt: string;
    content: string;
}
export interface GetCartAttributes {
    id: number;
    userId?: number;
    sessionId?: string;
    token: string;
    status: number;
    mobile: string;
    fullName: string;
    email: string;
    lin1?: string;
    lin2?: string;
    city: string;
    province?: string;
    country?: string;
    createdAt?: string;
    updatedAt?: string;
    content?: string;
}
export interface FindAttributesCart {
    id: number;
    userId?: number;
    sessionId?: string;
    token: string;
    status: number;
    mobile: string;
    fullName: string;
    email: string;
    lin1?: string;
    lin2?: string;
    city: string;
    province?: string;
    country?: string;
    createdAt?: string;
    updatedAt?: string;
    content?: string;
    cartItems: FindAttributesCartItems[];
    user: FindUserAttributesInCart;
}
export interface CartInput extends Optional<AttributesCart, "id" | "createdAt" | "updatedAt"> {
}
declare class Cart extends Model<AttributesCart, CartInput> {
    id: number;
    userId: number;
    sessionId: string;
    token: string;
    status: number;
    mobile: string;
    fullName: string;
    email: string;
    lin1: string;
    lin2: string;
    city: string;
    province: string;
    country: string;
    createdAt: string;
    updatedAt: string;
    content: string;
    cartItems: CartItems[];
    user: User;
}
export default Cart;
