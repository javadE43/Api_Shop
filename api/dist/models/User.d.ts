import { Model, Optional } from "sequelize";
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
}
export interface UserInput extends Optional<UserAttributes, "id"> {
}
export interface UserOutput extends Required<UserAttributes> {
}
export declare class User extends Model<UserAttributes, UserInput> implements UserAttributes {
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
}
export {};
