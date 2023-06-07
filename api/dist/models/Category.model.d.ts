import { Model } from "sequelize-typescript";
import { Optional } from "sequelize";
import { Product } from "./Product.model.js";
export interface AttributesCategory {
    id: number;
    title: string;
    slug: string;
    metatitle: string;
    content: string;
}
export interface CategoryInput extends Optional<AttributesCategory, "id" | "slug"> {
}
export declare class Category extends Model<AttributesCategory> implements AttributesCategory {
    readonly id: number;
    title: string;
    slug: string;
    metatitle: string;
    content: string;
    products: Product[];
}
