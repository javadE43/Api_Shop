import { Optional } from "sequelize";
import { Model } from "sequelize-typescript";
import { Role } from "./Role.model.js";
interface AttributesPermission {
    id: number;
    name: string;
    bits: number;
}
export interface PermissionInput extends Optional<AttributesPermission, "id"> {
}
export declare class Permission extends Model<AttributesPermission, PermissionInput> {
    id: number;
    name: string;
    bits: number;
    roles: Role[];
}
export {};
