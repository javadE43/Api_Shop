import {
  Table,
  Column,
  Model,
  AutoIncrement,
  Unique,
  Default,
  AllowNull,
  PrimaryKey,
  DataType,
  HasMany,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import { User, OrderItems, Transaction } from "../index.js";
import { FindOrderItems } from "./OrderItems.js";

//Attributes
interface AttributesOrder {
  id: number;
  userId: number;
  sessionId?: number;
  token: string;
  status: number;
  subTotal: number;
  itemDiscount: number;
  tax: number;
  promo: string;
  discount: number;
  grandTotal: number;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  line1?: string;
  line2?: string;
  content?: string;
  country?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
//Attributes
export interface FindOrderAttributes {
  id: number;
  userId?: number;
  token: string;
  status: number;
  subTotal: number;
  itemDiscount: number;
  tax: number;
  promo: string;
  discount: number;
  grandTotal: number;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  line1?: string;
  line2?: string;
  content?: string;
  country?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
//Attributes
export interface FindOrderJoinOrderItems {
  id: number;
  userId?: number;
  token: string;
  status: number;
  subTotal: number;
  itemDiscount: number;
  tax: number;
  promo: string;
  discount: number;
  grandTotal: number;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  line1?: string;
  line2?: string;
  content?: string;
  country?: string;
  createdAt?: Date;
  updatedAt?: Date;
  orderItem: FindOrderItems[];
}

export interface DateFind {
  TODAY_START?: string;
  now?: string;
  lastDate?: string;
  lastDateStart?: string;
  status?: string | number;
  hour?: string;
  minute?: string;
}
export interface DateFindService {
  TODAY_START?: string | null;
  now?: string | null;
  lastDate?: string | null;
  lastDateStart?: string;
  status?: string | number | null;
  hour?: string | null;
  minute?: string | null;
}

export interface OrderInput extends Optional<AttributesOrder, "id" | "sessionId"> {}

@Table({
  freezeTableName: true,
  timestamps: true,
  tableName: "order",
})
class Order extends Model<OrderInput> {
  @AllowNull(false)
  @AutoIncrement
  @PrimaryKey
  @Unique(true)
  @Column({ type: DataType.BIGINT })
  id!: number;

  @ForeignKey(() => User)
  user!: number;

  @AllowNull(false)
  @Unique(true)
  @Column({ type: DataType.STRING })
  token!: string;

  @AllowNull(false)
  @Column({ type: DataType.FLOAT })
  subTotal!: number;

  @AllowNull(false)
  @Default(0)
  @Column({ type: DataType.FLOAT })
  itemDiscount!: number;

  @AllowNull(false)
  @Default(0)
  @Column({ type: DataType.FLOAT })
  tax!: number;

  @AllowNull(false)
  @Default("")
  @Column({ type: DataType.STRING })
  promo!: string;

  @AllowNull(false)
  @Default(0)
  @Column({ type: DataType.FLOAT })
  discount!: number;

  @AllowNull(false)
  @Default(0)
  @Column({ type: DataType.FLOAT })
  grandTotal!: number;

  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  status!: number;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  fullName!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  email!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  mobile!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  city!: string;

  @Column({ type: DataType.STRING })
  line1!: string;

  @Column({ type: DataType.STRING })
  line2!: string;

  @Column({ type: DataType.STRING })
  content!: string;

  @Column({ type: DataType.STRING })
  country!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @HasMany(() => OrderItems)
  orderItem!: OrderItems[];

  @HasMany(() => Transaction)
  pay!: Transaction[];
}

export default Order;
