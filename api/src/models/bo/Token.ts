import { Optional } from "sequelize";
import {
  Table,
  Column,
  // BelongsTo,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import User from "./User.js";

interface TokenAttribute {
  id: number;
  name: string;
  userId: number;
}

export interface ModelInput extends Optional<TokenAttribute, "id"> {}
export interface ModelOutput extends Required<TokenAttribute> {}

@Table({
  freezeTableName: true,
  tableName: "tokens",
  timestamps: true,
})
export default  class Token extends Model<TokenAttribute, ModelInput> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  public id!: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public name!: string;
  @ForeignKey(() => User)
  @Column
  public userId!: number;

  // @BelongsTo(() => User,{
  //   constraints:false
  // })
  // users!: User;
}
