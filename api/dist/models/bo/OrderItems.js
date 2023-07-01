var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, AutoIncrement, Unique, Default, AllowNull, PrimaryKey, DataType, ForeignKey, CreatedAt, UpdatedAt, BelongsTo } from "sequelize-typescript";
import { Products, Order } from "../index.js";
let OrderItems = class OrderItems extends Model {
};
__decorate([
    AllowNull(false),
    AutoIncrement,
    PrimaryKey,
    Unique(true),
    Column({ type: DataType.BIGINT }),
    __metadata("design:type", Number)
], OrderItems.prototype, "id", void 0);
__decorate([
    ForeignKey(() => Products),
    __metadata("design:type", Number)
], OrderItems.prototype, "productId", void 0);
__decorate([
    ForeignKey(() => Order),
    __metadata("design:type", Number)
], OrderItems.prototype, "orderId", void 0);
__decorate([
    AllowNull(false),
    Unique(true),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], OrderItems.prototype, "sku", void 0);
__decorate([
    AllowNull(false),
    Column({ type: DataType.FLOAT }),
    __metadata("design:type", Number)
], OrderItems.prototype, "price", void 0);
__decorate([
    AllowNull(false),
    Default(0),
    Column({ type: DataType.FLOAT }),
    __metadata("design:type", Number)
], OrderItems.prototype, "discount", void 0);
__decorate([
    AllowNull(false),
    Column({ type: DataType.FLOAT }),
    __metadata("design:type", Number)
], OrderItems.prototype, "quantity", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], OrderItems.prototype, "content", void 0);
__decorate([
    CreatedAt,
    __metadata("design:type", Date)
], OrderItems.prototype, "createdAt", void 0);
__decorate([
    UpdatedAt,
    __metadata("design:type", Date)
], OrderItems.prototype, "updatedAt", void 0);
__decorate([
    BelongsTo(() => Products),
    __metadata("design:type", Array)
], OrderItems.prototype, "products", void 0);
OrderItems = __decorate([
    Table({
        freezeTableName: true,
        timestamps: true,
        tableName: "orderItems",
    })
], OrderItems);
export default OrderItems;
//# sourceMappingURL=OrderItems.js.map