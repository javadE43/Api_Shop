import { Optional } from "sequelize";
import { Model } from "sequelize-typescript";
interface TokenAttribute {
    id: number;
    name: string;
    userId: number;
}
export interface ModelInput extends Optional<TokenAttribute, "id"> {
}
export interface ModelOutput extends Required<TokenAttribute> {
}
export default class Token extends Model<TokenAttribute, ModelInput> {
    id: number;
    name: string;
    userId: number;
}
export {};
