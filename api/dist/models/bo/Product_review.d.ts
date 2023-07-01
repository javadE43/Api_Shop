import { Optional } from "sequelize";
import { Model } from "sequelize-typescript";
export interface AttributesProduct_review {
    id: number;
    productId: number;
    parentId?: number;
    title: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
    content: string;
}
export interface product_reviewInput extends Optional<AttributesProduct_review, "id" | "parentId"> {
}
export default class Product_review extends Model<AttributesProduct_review, product_reviewInput> implements AttributesProduct_review {
    id: number;
    productId: number;
    parentId: number;
    title: string;
    rating: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}
