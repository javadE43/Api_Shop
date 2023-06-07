import { Optional } from "sequelize";
import { Model } from "sequelize-typescript";
interface AttributesRoleHasPermission {
    id: number;
    roleId: number;
    permissionId: Number;
}
export interface RoleHasPermissionInput extends Optional<AttributesRoleHasPermission, "id"> {
}
export declare class RoleHasPermission extends Model<AttributesRoleHasPermission, RoleHasPermissionInput> {
    id: number;
    roleId: number;
    permissionId: Number;
}
export {};
