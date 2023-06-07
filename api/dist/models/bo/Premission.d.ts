import { Optional } from "sequelize";
import { Model } from "sequelize-typescript";
import Role from "./Role.js";
export interface AttributesPermission {
    id: number;
    name: string;
    bits: number;
    permission?: string;
}
export interface PermissionInput extends Optional<AttributesPermission, "id" | "permission"> {
}
export default class Permission extends Model<AttributesPermission, PermissionInput> {
    id: number;
    name: string;
    bits: number;
    roles: Role[];
}
