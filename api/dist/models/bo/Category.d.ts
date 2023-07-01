import { Model } from "sequelize-typescript";
import { Optional } from "sequelize";
import Products, { FindProductsInterface } from "./Product.js";
export interface AttributesCategory {
    id: number;
    title: string;
    slug: string;
    metatitle: string;
    image?: string;
    content: string;
}
export interface GetByTilteInterface {
    id: number;
    title: string;
    metatitle: string;
    slug: string;
    image?: string;
    content: string;
    products: FindProductsInterface[];
}
export interface UpdateDataParams {
    title?: string;
    metatitle?: string;
    slug?: string;
    image?: string;
    content?: string;
}
export interface CategoryInput extends Optional<AttributesCategory, "id" | "slug" | "content" | "metatitle" | "image"> {
}
export default class Categorys extends Model<AttributesCategory, CategoryInput> implements AttributesCategory {
    readonly id: number;
    title: string;
    slug: string;
    metatitle: string;
    image: string;
    content: string;
    products: Products[];
}
