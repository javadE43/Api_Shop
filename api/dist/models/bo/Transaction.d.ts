import { Model } from "sequelize-typescript";
import { Optional } from "sequelize";
export interface AttributesTransaction {
    id: number;
    userId?: number;
    orderId: number;
    code: string;
    type: number;
    mode: number;
    status: number;
    createdAt?: Date;
    updatedAt?: Date;
    content: string;
}
export interface FindAttributes {
    id: number;
    userId: number;
    orderId: number;
    code: string;
    type: number;
    mode: number;
    status: number;
    createdAt: Date;
    updatedAt: Date;
    content: string;
}
export interface TransactionInput extends Optional<AttributesTransaction, "id"> {
}
declare class Transaction extends Model<TransactionInput> {
    id: number;
    userId: number;
    orderId: number;
    code: string;
    type: number;
    mode: number;
    status: number;
    createdAt: Date;
    updatedAt: Date;
    content: string;
}
export default Transaction;
