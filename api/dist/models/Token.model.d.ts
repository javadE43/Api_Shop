import { Optional } from "sequelize";
import { Model } from "sequelize-typescript";
import { User } from "./User.model.js";
interface TokenAttribute {
    id: number;
    name: string;
    userId: number;
}
export interface ModelInput extends Optional<TokenAttribute, "id"> {
}
export declare class Token extends Model<TokenAttribute, ModelInput> {
    id: number;
    name: string;
    userId: number;
    users: User;
}
export {};
