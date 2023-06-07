var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType, BelongsToMany, HasMany, } from "sequelize-typescript";
import Permission from "./Premission.js";
import RoleHasPermission from "./Role_Has_Permission.js";
import User from "./User.js";
let Role = class Role extends Model {
};
__decorate([
    Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Role.prototype, "id", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    HasMany(() => User),
    __metadata("design:type", Array)
], Role.prototype, "users", void 0);
__decorate([
    BelongsToMany(() => Permission, () => RoleHasPermission),
    __metadata("design:type", Array)
], Role.prototype, "permissons", void 0);
Role = __decorate([
    Table({
        freezeTableName: true,
        tableName: "roles",
    })
], Role);
export default Role;
//# sourceMappingURL=Role.js.map