import {
  Table,
  Column,
  DataType,
  Model,
  Unique,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  ForeignKey
} from "sequelize-typescript";

import { Optional } from "sequelize";
import Order from "./Order.js";

//
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

export interface TransactionInput extends Optional<AttributesTransaction, "id"> {}

@Table({
  freezeTableName: true,
  timestamps: true,
  tableName: "transaction",
})
class Transaction extends Model<TransactionInput> {
     
    @AutoIncrement
    @Unique(true)
    @AllowNull(false)
    @PrimaryKey
    @Column({type:DataType.BIGINT})
    id!:number

    @Column({type:DataType.BIGINT})
    userId!:number

    @ForeignKey(()=>Order)
    orderId!:number

    @Column({type:DataType.STRING})
    code!:string

    @Column({type:DataType.INTEGER})

    @Column({type:DataType.INTEGER})
    type!:number

    @Column({type:DataType.INTEGER})
    mode!:number
    
    @Column({type:DataType.INTEGER})
    status!:number

    @CreatedAt
    createdAt!:Date

    @UpdatedAt
    updatedAt!:Date
    
    @Column({type:DataType.TEXT})
    content!:string

}

export default Transaction;
