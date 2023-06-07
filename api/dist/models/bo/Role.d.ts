import { Optional } from "sequelize";
import { Model } from "sequelize-typescript";
import Permission from "./Premission.js";
import User from "./User.js";
interface PermissionRoles {
    id?: number;
    name?: string;
    bits?: number;
    permission: string;
}
interface AttributesRole {
    id: number;
    name: string;
    permissons: PermissionRoles[];
}
export interface ModelInput extends Optional<AttributesRole, "id" | "permissons"> {
}
export default class Role extends Model<ModelInput> {
    id: number;
    name: string;
    users: User[];
    permissons: Permission[];
}
export {};
