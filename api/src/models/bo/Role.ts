import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  // BelongsTo,
  HasMany,
} from "sequelize-typescript";
import  Permission from "./Premission.js";
import  RoleHasPermission  from "./Role_Has_Permission.js";
import User from "./User.js";

interface PermissionRoles {
  id?: number;
  name?: string;
  bits?: number;
  permission: string;
}

interface AttributesRole {
  id: number;
  name: string;
  permissons: PermissionRoles[];
}

export interface ModelInput extends Optional<AttributesRole, "id" | "permissons"> {}
// export interface ModelOutput extends Required<AttributesRole> {}

@Table({
  freezeTableName: true,
  tableName: "roles",
})
export default  class Role extends Model<ModelInput> {
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
  // @Column({
  //   type: DataType.INTEGER,
  //   allowNull: false,
  // })
  // public bits!: number;

  @HasMany(() => User)
  users!: User[];

  // @BelongsTo(() => User,{
  //   constraints:false
  // })

  @BelongsToMany(() => Permission, () => RoleHasPermission)
  permissons!: Permission[];
}
