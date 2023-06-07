import { Model } from "sequelize-typescript";
import { Optional } from "sequelize";
import Products, { OutPutProductsOnCategory } from "./Product.js";
export interface AttributesCategory {
    id: number;
    title: string;
    slug: string;
    metatitle: string;
    content: string;
}
export interface GetByTilte {
    id: number;
    title: string;
    metatitle: string;
    products: OutPutProductsOnCategory[];
}
export interface CategoryInput extends Optional<AttributesCategory, "id" | "slug"> {
}
export default class Categorys extends Model<AttributesCategory> implements AttributesCategory {
    readonly id: number;
    title: string;
    slug: string;
    metatitle: string;
    content: string;
    products: Products[];
}
