import { Table, Column, Model, DataType, BelongsToMany, Default } from "sequelize-typescript";
import { Optional } from "sequelize";
import Product_category from "./product_category.js";
import Products, { FindProductsInterface } from "./Product.js";

export interface AttributesCategory {
  id: number;
  title: string;
  slug: string;
  metatitle: string;
  image?: string;
  content: string;
}

//GetByTilte
export interface GetByTilteInterface {
  id: number;
  title: string;
  metatitle: string;
  slug: string;
  image?: string;
  content: string;
  products: FindProductsInterface[];
}
//UpdateData
export interface UpdateDataParams {
  title?: string;
  metatitle?: string;
  slug?: string;
  image?: string;
  content?: string;
}

export interface CategoryInput
  extends Optional<AttributesCategory, "id" | "slug" | "content" | "metatitle" | "image"> {}

@Table({
  freezeTableName: true,
  tableName: "categorys",
  timestamps: true,
  paranoid: true,
})
export default class Categorys
  extends Model<AttributesCategory, CategoryInput>
  implements AttributesCategory
{
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    comment: "category_id",
  })
  public readonly id!: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: "category_title",
  })
  public title!: string;
  @Default(" ")
  @Column({
    type: DataType.STRING,
    comment: "category_slug",
  })
  public slug!: string;

  @Default(" ")
  @Column({
    type: DataType.STRING,
    comment: "category_metatitle",
  })
  public metatitle!: string;
  @Default(" ")
  @Column({
    type: DataType.STRING,
    comment: "category_metatitle",
  })
  public image!: string;

  @Default(" ")
  @Column({
    type: DataType.STRING,
    comment: "category_content",
  })
  public content!: string;

  @BelongsToMany(() => Products, {
    through: { model: () => Product_category },
  })
  products!: Products[];
}
