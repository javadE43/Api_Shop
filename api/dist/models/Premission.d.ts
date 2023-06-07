import { Model, Optional } from "sequelize";
interface AttributesPermission {
    id: number;
    name: string;
    bits: number;
}
export interface PermissionOutput extends Required<AttributesPermission> {
}
export interface PermissionInput extends Optional<AttributesPermission, "id"> {
}
export declare class Permission extends Model<AttributesPermission, PermissionInput> {
    id: number;
    name: string;
    bits: number;
}
export {};
