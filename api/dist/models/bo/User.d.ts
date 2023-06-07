import { Optional } from "sequelize";
import { Model } from "sequelize-typescript";
import Token from "./Token.js";
import Role from "./Role.js";
import { Products } from "../index.js";
export interface PermissionRoleUsers {
    role: string;
    permission: number;
}
export interface RoleUsers {
    id: number;
    firstname?: string;
    lastname?: string;
    mobile: string;
    email: string;
    username: string;
    active: boolean;
    image?: string;
    role: PermissionRoleUsers;
}
export interface UserAttributesOutput {
    count?: number;
    data: RoleUsers[];
    totalPages?: number;
    currentPage?: number;
    nextPage?: boolean;
    previousPage?: boolean;
}
export interface UpdateUser {
    firstname?: string;
    lastname?: string;
    username?: string;
    mobile?: string;
    email: string;
    password?: string;
    confirmPassword?: string;
    roleId: number;
    vender?: number;
    image?: string;
}
export interface Login {
}
interface UserAttributes {
    id: number;
    firstname?: string;
    lastname?: string;
    username: string;
    mobile: string;
    email: string;
    password: string;
    roleId: number;
    vender?: number;
    active: boolean;
    image?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletionDate?: Date;
}
export interface UserInput extends Optional<UserAttributes, "id" | "active"> {
}
declare class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    static passwordHash(instance: User): Promise<void>;
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    mobile: string;
    email: string;
    password: string;
    roleId: number;
    active: boolean;
    vender?: number;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
    deletionDate: Date;
    tokens: Token[];
    role: Role;
    products: Products[];
}
export default User;
export declare const numberof = 12;
