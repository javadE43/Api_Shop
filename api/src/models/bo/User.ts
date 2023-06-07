import { Optional } from "sequelize";
import {
  Table,
  Column,
  HasMany,
  BelongsTo,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BeforeSave,
  ForeignKey,
  AllowNull,
  Default,
} from "sequelize-typescript";

//passwordHash
import bcrypt from "bcrypt";

//init
import Token from "./Token.js";
import Role from "./Role.js";
import  {Cart}  from "../index.js";

export interface PermissionRoleUsers {
  role: string;
  permission: number;
}
export interface RoleUsers {
  id: number;
  firstname?: string;
  lastname?: string;
  mobile: string;
  email: string;
  username: string;
  active: boolean;
  image?: string;
  role: PermissionRoleUsers;
}
export interface UserAttributesOutput {
  count?: number;
  data: RoleUsers[];
  totalPages?: number;
  currentPage?: number;
  nextPage?: boolean;
  previousPage?: boolean;
}

export interface UpdateUser {
  firstname?: string;
  lastname?: string;
  username?: string;
  mobile?: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  roleId: number;
  vender?: number;
  image?: string;
}
export interface Login {}
export interface FindUserAttributesInCart {
  id: number;
  firstname?: string;
  lastname?: string;
  username: string;
  mobile: string;
  email: string;
  password: string;
  roleId: number;
  vender?: number;
  active: boolean;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletionDate?: Date;
  role:{name:string}
}

interface UserAttributes {
  id: number;
  firstname?: string;
  lastname?: string;
  username: string;
  mobile: string;
  email: string;
  password: string;
  roleId: number;
  vender?: number;
  active: boolean;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletionDate?: Date;
}

export interface UserInput extends Optional<UserAttributes, "id" | "active"> {}
// export interface UserOutput extends Required<UserAttributes> {}

@Table({
  freezeTableName: true,
  tableName: "users",
  timestamps: true,
  paranoid: true,
})
class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  @BeforeSave
  static async passwordHash(instance: User) {
    const hash = await bcrypt.hash(instance.password, 10);
    instance.password = hash;
  }

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  public id!: number;
  @AllowNull(true)
  @Default(null)
  @Column({ type: DataType.STRING })
  public firstname!: string;
  @AllowNull(true)
  @Default(null)
  @Column({ type: DataType.STRING })
  public lastname!: string;
  @Column({
    type: DataType.STRING,
    defaultValue: null,
  })
  public username!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public mobile!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public email!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public password!: string;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  public roleId!: number;

  @AllowNull(false)
  @Default(false)
  @Column({ type: DataType.BOOLEAN })
  active!: boolean;

  @Column({
    type: DataType.INTEGER,
  })
  public vender?: number;
  @AllowNull(true)
  @Default(null)
  @Column({ type: DataType.STRING })
  public image?: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletionDate!: Date;

  @HasMany(() => Token)
  tokens!: Token[];
  
  @BelongsTo(() => Role)
  role!: Role;
  
  @HasMany(() => Cart)
  carts!: Cart[];

}
export default User;

