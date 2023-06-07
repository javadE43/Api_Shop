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
    ForeignKey,
    CreatedAt,
    UpdatedAt,
    BelongsTo
  } from "sequelize-typescript";
  import { Optional } from "sequelize";
  import { Products,Order } from "../index.js";
import { AttributesProduct } from "./Product.js";
  
  //Attributes
  interface AttributesOrderItems {
    id: number;
    productId: number;
    orderId: number;
    sku: string;
    discount: number;
    price: number;
    quantity:number
    content?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  //Attributes
  export interface FindOrderItems {
    id: number;
    productId: number;
    orderId: number;
    sku: string;
    discount: number;
    price: number;
    quantity:number
    content?: string;
    createdAt?: Date;
    updatedAt?: Date;
    products:AttributesProduct[]
  }
  
  export interface OrderInputItems extends Optional<AttributesOrderItems, "id"> {}
  
  @Table({
    freezeTableName: true,
    timestamps: true,
    tableName: "orderItems",
  })
  class OrderItems extends Model<OrderInputItems> {
    @AllowNull(false)
    @AutoIncrement
    @PrimaryKey
    @Unique(true)
    @Column({ type: DataType.BIGINT })
    id!: number;
  
    @ForeignKey(() => Products)
    productId!: number;
  
    @ForeignKey(() => Order)
    orderId!: number;
  
    @AllowNull(false)
    @Unique(true)
    @Column({ type: DataType.STRING })
    sku!: string;
  
    @AllowNull(false)
    @Column({ type: DataType.FLOAT })
    price!: number;
  
    @AllowNull(false)
    @Default(0)
    @Column({ type: DataType.FLOAT })
    discount!: number;
  
    @AllowNull(false)
    @Column({ type: DataType.FLOAT })
    quantity!: number;
  
    @Column({ type: DataType.STRING })
    content!: string;
  
    @CreatedAt
    createdAt!: Date;
  
    @UpdatedAt
    updatedAt!: Date;

    @BelongsTo(()=>Products)
    products!:Products[]
  }
  
  export default OrderItems;
  