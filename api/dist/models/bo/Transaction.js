var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, DataType, Model, Unique, AutoIncrement, PrimaryKey, AllowNull, CreatedAt, UpdatedAt, ForeignKey } from "sequelize-typescript";
import Order from "./Order.js";
let Transaction = class Transaction extends Model {
};
__decorate([
    AutoIncrement,
    Unique(true),
    AllowNull(false),
    PrimaryKey,
    Column({ type: DataType.BIGINT }),
    __metadata("design:type", Number)
], Transaction.prototype, "id", void 0);
__decorate([
    Column({ type: DataType.BIGINT }),
    __metadata("design:type", Number)
], Transaction.prototype, "userId", void 0);
__decorate([
    ForeignKey(() => Order),
    __metadata("design:type", Number)
], Transaction.prototype, "orderId", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Transaction.prototype, "code", void 0);
__decorate([
    Column({ type: DataType.INTEGER }),
    Column({ type: DataType.INTEGER }),
    __metadata("design:type", Number)
], Transaction.prototype, "type", void 0);
__decorate([
    Column({ type: DataType.INTEGER }),
    __metadata("design:type", Number)
], Transaction.prototype, "mode", void 0);
__decorate([
    Column({ type: DataType.INTEGER }),
    __metadata("design:type", Number)
], Transaction.prototype, "status", void 0);
__decorate([
    CreatedAt,
    __metadata("design:type", Date)
], Transaction.prototype, "createdAt", void 0);
__decorate([
    UpdatedAt,
    __metadata("design:type", Date)
], Transaction.prototype, "updatedAt", void 0);
__decorate([
    Column({ type: DataType.TEXT }),
    __metadata("design:type", String)
], Transaction.prototype, "content", void 0);
Transaction = __decorate([
    Table({
        freezeTableName: true,
        timestamps: true,
        tableName: "transaction",
    })
], Transaction);
export default Transaction;
//# sourceMappingURL=Transaction.js.map