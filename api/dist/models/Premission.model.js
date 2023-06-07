var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType, BelongsToMany, } from "sequelize-typescript";
import { Role } from "./Role.model.js";
import { RoleHasPermission } from "./Role_Has_Permission.model.js";
let Permission = class Permission extends Model {
};
__decorate([
    Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Permission.prototype, "id", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Permission.prototype, "name", void 0);
__decorate([
    Column({
        type: DataType.BIGINT,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Permission.prototype, "bits", void 0);
__decorate([
    BelongsToMany(() => Role, () => RoleHasPermission),
    __metadata("design:type", Array)
], Permission.prototype, "roles", void 0);
Permission = __decorate([
    Table({
        freezeTableName: true,
        tableName: "permission"
    })
], Permission);
export { Permission };
//# sourceMappingURL=Premission.model.js.map