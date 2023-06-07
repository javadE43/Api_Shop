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
  BelongsTo
} from "sequelize-typescript";
import { Optional } from "sequelize";

//
import { Cart, Products } from "../index.js";
import { AttributesProduct } from "./Product.js";

interface AttributesCartItems {
  id: number;
  productId: number;
  cartId: number;
  sku: string;
  price: number;
  discount: number;
  quantity: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  content: string;
}
export interface FindAttributesCartItems {
  id: number;
  productId: number;
  cartId: number;
  sku: string;
  price: number;
  discount: number;
  quantity: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  content: string;
  products:AttributesProduct[]
}

export interface CartItemsInput
  extends Optional<AttributesCartItems, "id" | "content" | "createdAt" | "updatedAt"> {}

@Table({
  freezeTableName: true,
  tableName: "CartItems",
  timestamps: true,
})
class CartItems extends Model<AttributesCartItems, CartItemsInput> {
  @AllowNull(false)
  @AutoIncrement
  @PrimaryKey
  @Unique(true)
  @Column({ type: DataType.BIGINT })
  id!: number;

  @ForeignKey(() => Products)
  productId!: number;

  @ForeignKey(() => Cart)
  cartId!: number;

  @Column({ type: DataType.FLOAT })
  price!: number;

  @Column({ type: DataType.INTEGER })
  discount!: number;

  @Column({ type: DataType.INTEGER })
  quantity!: number;

  @Column({ type: DataType.STRING })
  sku!: string;

  @Column({ type: DataType.BOOLEAN })
  active!: boolean;

  @Column({ type: DataType.TEXT })
  content!: string;

  @CreatedAt
  createdAt!: string;

  @UpdatedAt
  updatedAt!: string;

  @BelongsTo(()=>Products)
  products!:Products[]
}

export default CartItems;
