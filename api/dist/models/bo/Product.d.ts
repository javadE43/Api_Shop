import { Model } from "sequelize-typescript";
import { Optional } from "sequelize";
import Categorys from "./Category.js";
import Product_review from "./Product_review.js";
import User from "./User.js";
import CartItems from "./CartItems.js";
import OrderItems from "./OrderItems.js";
export interface AttributesProduct {
    id: number;
    userId: number;
    categoryId?: number;
    title: string;
    metatitle?: string;
    slug?: string;
    images?: string;
    summary?: string;
    type: string;
    sku: string;
    price: number;
    discount?: number;
    quantity: number;
    shop: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    content?: string;
}
interface Creator {
    username: string;
    lastname: string;
    firstname: string;
    role: {
        name: string;
    };
    image?: string;
    mobile: string;
    email: string;
}
interface Categrys {
    title: string;
    metatitle: string;
    image: string;
    content: string;
    slug: string;
}
interface Review {
    title: string;
    rating: number;
    content: string;
}
export interface FindProductsInterface {
    id: number;
    title: string;
    metatitle?: string;
    slug?: string;
    summary?: string;
    type: string;
    images?: string[] | string;
    sku: string;
    price?: number;
    discount?: number;
    quantity?: number;
    shop?: number;
    content?: string;
    user: Creator | any;
    review: Review;
}
export interface OutPutProductsOnCategory {
    id: number;
    title: string;
    metatitle?: string;
    slug?: string;
    summary?: string;
    type: string;
    images?: string[];
    sku: string;
    price?: number;
    discount?: number;
    quantity?: number;
    shop?: number;
    content?: string;
    user: Creator;
    categorys: Categrys | Categrys[];
    review: Review;
}
export interface UpdateProduct {
    title?: string;
    metatitle?: string;
    slug?: string;
    summary?: string;
    type?: string;
    price?: number;
    images?: string;
    discount?: number;
    quantity?: number;
    shop?: number;
    content?: string;
    categoryId?: number;
}
export interface ProductInput extends Optional<AttributesProduct, "id"> {
}
export default class Products extends Model<AttributesProduct, ProductInput> {
    id: number;
    title: string;
    metatitle: string;
    slug: string;
    summery: string;
    type: string;
    sku: string;
    images: string;
    price: number;
    discount: number;
    quantity: number;
    shop: number;
    content: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    categorys: Categorys[];
    review: Product_review;
    items: CartItems[];
    orderItems: OrderItems[];
    user: User;
}
export {};
