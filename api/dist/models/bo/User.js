var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, HasMany, BelongsTo, Model, DataType, CreatedAt, UpdatedAt, DeletedAt, BeforeSave, ForeignKey, AllowNull, Default, } from "sequelize-typescript";
import bcrypt from "bcrypt";
import Token from "./Token.js";
import Role from "./Role.js";
import { Products } from "../index.js";
let User = class User extends Model {
    static async passwordHash(instance) {
        const hash = await bcrypt.hash(instance.password, 10);
        instance.password = hash;
    }
};
__decorate([
    Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    AllowNull(true),
    Default(null),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    AllowNull(true),
    Default(null),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        defaultValue: null,
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], User.prototype, "mobile", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    ForeignKey(() => Role),
    Column({
        type: DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], User.prototype, "roleId", void 0);
__decorate([
    AllowNull(false),
    Default(false),
    Column({ type: DataType.BOOLEAN }),
    __metadata("design:type", Boolean)
], User.prototype, "active", void 0);
__decorate([
    Column({
        type: DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], User.prototype, "vender", void 0);
__decorate([
    AllowNull(true),
    Default(null),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], User.prototype, "image", void 0);
__decorate([
    CreatedAt,
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    UpdatedAt,
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    DeletedAt,
    __metadata("design:type", Date)
], User.prototype, "deletionDate", void 0);
__decorate([
    HasMany(() => Token),
    __metadata("design:type", Array)
], User.prototype, "tokens", void 0);
__decorate([
    BelongsTo(() => Role),
    __metadata("design:type", Role)
], User.prototype, "role", void 0);
__decorate([
    HasMany(() => Products),
    __metadata("design:type", Array)
], User.prototype, "products", void 0);
__decorate([
    BeforeSave,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User]),
    __metadata("design:returntype", Promise)
], User, "passwordHash", null);
User = __decorate([
    Table({
        freezeTableName: true,
        tableName: "users",
        timestamps: true,
        paranoid: true,
    })
], User);
export default User;
export const numberof = 12;
//# sourceMappingURL=User.js.map