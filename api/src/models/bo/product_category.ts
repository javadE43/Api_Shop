import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  Unique,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";
import  Categorys  from "./Category.js";
import  Products  from "./Product.js";

interface AttributeProduct_category {
  id: number;
  productId: number;
  categoryId: number;
}

export interface ProCateInput extends Optional<AttributeProduct_category, "id"> {}

@Table({
  freezeTableName: true,
  timestamps: true,
  tableName: "product_category",
  paranoid:true
})
export default class Product_category
  extends Model<AttributeProduct_category, ProCateInput>
  implements AttributeProduct_category
{
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column({ type: DataType.BIGINT })
  id!: number;

  @ForeignKey(() => Products)
  @Column({ type: DataType.BIGINT })
  productId!: number;

  @ForeignKey(() => Categorys)
  @Column({ type: DataType.BIGINT })
  categoryId!: number;
}
