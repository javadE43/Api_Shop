import {
  Table,
  Column,
  Model,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  DataType,
  Unique,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Default,
  HasMany,
  BelongsTo
} from "sequelize-typescript";
import { Optional } from "sequelize";

//
import { CartItems, User } from "../index.js";
import { FindAttributesCartItems } from "./CartItems.js";
import { FindUserAttributesInCart } from "./User.js";

interface AttributesCart {
  id: number;
  userId: number;
  sessionId: string;
  token: string;
  status: number;
  fullName: string;
  mobile: string;
  email: string;
  lin1: string;
  lin2: string;
  city: string;
  province: string;
  country: string;
  createdAt: string;
  updatedAt: string;
  content: string;
}
export interface GetCartAttributes {
  id: number;
  userId?: number;
  sessionId?: string;
  token: string;
  status: number;
  mobile: string;
  fullName: string;
  email: string;
  lin1?: string;
  lin2?: string;
  city: string;
  province?: string;
  country?: string;
  createdAt?: string;
  updatedAt?: string;
  content?: string;
}
export interface FindAttributesCart {
  id: number;
  userId?: number;
  sessionId?: string;
  token: string;
  status: number;
  mobile: string;
  fullName: string;
  email: string;
  lin1?: string;
  lin2?: string;
  city: string;
  province?: string;
  country?: string;
  createdAt?: string;
  updatedAt?: string;
  content?: string;
  cartItems:FindAttributesCartItems[]
  user:FindUserAttributesInCart
}

export interface CartInput extends Optional<AttributesCart, "id" | "createdAt" | "updatedAt"> {}

@Table({
  freezeTableName: true,
  tableName: "cart",
  timestamps: true,
})
class Cart extends Model<AttributesCart, CartInput> {
  @AllowNull(false)
  @AutoIncrement
  @PrimaryKey
  @Unique(true)
  @Column({ type: DataType.BIGINT })
  id!: number;

  @ForeignKey(() => User)
  userId!: number;

  @Column({ type: DataType.STRING })
  sessionId!: string;

  @Column({ type: DataType.STRING })
  token!: string;

  @Column({ type: DataType.INTEGER })
  status!: number;

  @Default(null)
  @Column({ type: DataType.STRING })
  mobile!: string;

  @Default(null)
  @Column({ type: DataType.STRING })
  fullName!: string;

  @Default(null)
  @Column({ type: DataType.STRING })
  email!: string;

  @Default(null)
  @Column({ type: DataType.STRING })
  lin1!: string;

  @Default(null)
  @Column({ type: DataType.STRING })
  lin2!: string;

  @Default(null)
  @Column({ type: DataType.STRING })
  city!: string;

  @Default(null)
  @Column({ type: DataType.STRING })
  province!: string;

  @Default(null)
  @Column({ type: DataType.STRING })
  country!: string;

  @CreatedAt
  createdAt!: string;

  @UpdatedAt
  updatedAt!: string;

  @Column({ type: DataType.TEXT("long") })
  content!: string;

  @HasMany(()=>CartItems)
  cartItems!:CartItems[]

  @BelongsTo(()=>User)
  user!:User
}

export default Cart;
