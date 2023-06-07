import { Optional } from "sequelize";
import { Model } from "sequelize-typescript";
import { Token } from "./Token.model.js";
import { Role } from "./Role.model.js";
interface UserAttributes {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    mobile: string;
    email: string;
    password: string;
    roleId: number;
    vender?: number;
    image?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletionDate?: Date;
}
export interface UserInput extends Optional<UserAttributes, "id"> {
}
export declare class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    static passwordHash(instance: User): Promise<void>;
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    mobile: string;
    email: string;
    password: string;
    roleId: number;
    vender?: number;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
    deletionDate: Date;
    tokens: Token[];
    roles: Role;
}
export {};
