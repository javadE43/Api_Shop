import { Optional } from "sequelize";
import { Model } from "sequelize-typescript";
interface AttributeProduct_category {
    id: number;
    productId: number;
    categoryId: number;
}
export interface ProCateInput extends Optional<AttributeProduct_category, "id"> {
}
export default class Product_category extends Model<AttributeProduct_category, ProCateInput> implements AttributeProduct_category {
    id: number;
    productId: number;
    categoryId: number;
}
export {};
