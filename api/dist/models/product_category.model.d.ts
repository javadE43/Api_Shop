import { Model } from "sequelize-typescript";
interface AttributeProduct_category {
    productId: number;
    categoryId: number;
}
export declare class Product_category extends Model<AttributeProduct_category> implements AttributeProduct_category {
    productId: number;
    categoryId: number;
}
export {};
