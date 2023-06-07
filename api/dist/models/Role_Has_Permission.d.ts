import { Model, Optional } from "sequelize";
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
