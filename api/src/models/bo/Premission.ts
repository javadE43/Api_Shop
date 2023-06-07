import { Optional } from "sequelize";
import { Table, Column, Model, DataType, BelongsToMany } from "sequelize-typescript";
import  Role  from "./Role.js";
import  RoleHasPermission  from "./Role_Has_Permission.js";

export interface AttributesPermission {
  id: number;
  name: string;
  bits: number;
  permission?: string;
}

// export interface PermissionOutput extends Required<AttributesPermission> {}
export interface PermissionInput extends Optional<AttributesPermission, "id" | "permission"> {}

//
@Table({
  freezeTableName: true,
  tableName: "permission",
})
export default class Permission extends Model<AttributesPermission, PermissionInput> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  public id!: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public name!: string;
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  public bits!: number;

  @BelongsToMany(() => Role, () => RoleHasPermission)
  roles!: Role[];
}
