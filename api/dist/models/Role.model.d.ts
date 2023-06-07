import { Optional } from "sequelize";
import { Model } from "sequelize-typescript";
import { Permission } from "./Premission.model.js";
import { User } from "./User.model.js";
interface AttributesRole {
    id: number;
    name: string;
    bits: string;
}
export interface ModelInput extends Optional<AttributesRole, "id"> {
}
export declare class Role extends Model<AttributesRole, ModelInput> {
    id: number;
    name: string;
    bits: string;
    users: User;
    permissons: Permission[];
}
export {};
