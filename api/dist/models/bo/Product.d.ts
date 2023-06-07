import { Model } from "sequelize-typescript";
import { Optional } from "sequelize";
import Categorys from "./Category.js";
export interface AttributesProduct {
    id: number;
    userId: number;
    categoryId?: number;
    title: string;
    metatitle?: string;
    slug?: string;
    summary?: string;
    type: number;
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
export interface OutPutProductsOnCategory {
    id: number;
    userId: number;
    title: string;
    metatitle?: string;
    slug?: string;
    summary?: string;
    type: number;
    sku: string;
    price: number;
    discount?: number;
    quantity: number;
    shop: number;
    content?: string;
}
export interface UpdateProduct {
    title?: string;
    metatitle?: string;
    slug?: string;
    summary?: string;
    type?: number;
    price?: number;
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
    type: number;
    sku: string;
    price: number;
    discount: number;
    quantity: number;
    shop: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    categorys: Categorys[];
}
