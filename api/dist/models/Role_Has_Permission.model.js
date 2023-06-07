var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType, ForeignKey } from "sequelize-typescript";
import { Permission } from "./Premission.model.js";
import { Role } from "./Role.model.js";
let RoleHasPermission = class RoleHasPermission extends Model {
};
__decorate([
    Column({
        type: DataType.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], RoleHasPermission.prototype, "id", void 0);
__decorate([
    ForeignKey(() => Role),
    Column,
    __metadata("design:type", Number)
], RoleHasPermission.prototype, "roleId", void 0);
__decorate([
    ForeignKey(() => Permission),
    Column,
    __metadata("design:type", Number)
], RoleHasPermission.prototype, "permissionId", void 0);
RoleHasPermission = __decorate([
    Table({
        freezeTableName: true,
        tableName: 'rolehasepermission'
    })
], RoleHasPermission);
export { RoleHasPermission };
//# sourceMappingURL=Role_Has_Permission.model.js.map