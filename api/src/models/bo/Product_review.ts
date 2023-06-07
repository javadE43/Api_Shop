import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  AllowNull,
  Default,
  Unique,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { Products } from "../index.js";

export interface AttributesProduct_review {
  id: number;
  productId: number;
  parentId?: number;
  title: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  content: string;
}

export interface product_reviewInput
  extends Optional<AttributesProduct_review, "id" | "parentId"> {}

@Table({
  freezeTableName: true,
  timestamps: true,
  tableName: "product_review",
})
export default class Product_review
  extends Model<AttributesProduct_review, product_reviewInput>
  implements AttributesProduct_review
{
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Unique(true)
  @Column({ type: DataType.BIGINT })
  id!: number;

  @ForeignKey(() => Products)
  productId!: number;

  @Column({ type: DataType.BIGINT })
  parentId!: number;

  @Default("")
  @Column({ type: DataType.STRING })
  title!: string;
  @Default(0)
  @Column({ type: DataType.INTEGER })
  rating!: number;

  @Column({ type: DataType.TEXT })
  content!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
