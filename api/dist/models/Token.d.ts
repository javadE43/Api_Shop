import { Model, Optional } from "sequelize";
interface TokenAttribute {
    id: number;
    name: string;
    userId: number;
}
export interface ModelInput extends Optional<TokenAttribute, "id"> {
}
export interface ModelOutput extends Required<TokenAttribute> {
}
export declare class Token extends Model<TokenAttribute, ModelInput> {
    id: number;
    name: string;
    userId: number;
}
export {};
