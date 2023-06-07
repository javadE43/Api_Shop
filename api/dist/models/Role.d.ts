import { Model, Optional } from "sequelize";
interface AttributesRole {
    id: number;
    name: string;
    bits: string;
}
export interface ModelInput extends Optional<AttributesRole, "id"> {
}
export interface ModelOutput extends Required<AttributesRole> {
}
export declare class Role extends Model<AttributesRole, ModelInput> {
    id: number;
    name: string;
    bits: string;
}
export {};
