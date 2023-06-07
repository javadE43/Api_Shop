import { Optional } from "sequelize";
import { Table, Column, Model, DataType, ForeignKey } from "sequelize-typescript";
//
import  Permission  from "./Premission.js";
import  Role  from "./Role.js";
//
interface AttributesRoleHasPermission {
  id: number;
  roleId: number;
  permissionId: Number;
}

export interface RoleHasPermissionInput extends Optional<AttributesRoleHasPermission, "id"> {}
//
@Table({
  freezeTableName: true,
  tableName: "rolehasepermission",
})
export default  class RoleHasPermission extends Model<AttributesRoleHasPermission, RoleHasPermissionInput> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number;
  @ForeignKey(() => Role)
  @Column
  public roleId!: number;
  @ForeignKey(() => Permission)
  @Column
  public permissionId!: number;
}
