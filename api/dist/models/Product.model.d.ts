import { Model } from "sequelize-typescript";
import { Category } from "./Category.model.js";
export declare class Product extends Model {
    readonly id: number;
    categorys: Category[];
}
