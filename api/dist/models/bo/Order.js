var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, AutoIncrement, Unique, Default, AllowNull, PrimaryKey, DataType, HasMany, ForeignKey, CreatedAt, UpdatedAt, } from "sequelize-typescript";
import { User, OrderItems, Transaction } from "../index.js";
let Order = class Order extends Model {
};
__decorate([
    AllowNull(false),
    AutoIncrement,
    PrimaryKey,
    Unique(true),
    Column({ type: DataType.BIGINT }),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    ForeignKey(() => User),
    __metadata("design:type", Number)
], Order.prototype, "user", void 0);
__decorate([
    AllowNull(false),
    Unique(true),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Order.prototype, "token", void 0);
__decorate([
    AllowNull(false),
    Column({ type: DataType.FLOAT }),
    __metadata("design:type", Number)
], Order.prototype, "subTotal", void 0);
__decorate([
    AllowNull(false),
    Default(0),
    Column({ type: DataType.FLOAT }),
    __metadata("design:type", Number)
], Order.prototype, "itemDiscount", void 0);
__decorate([
    AllowNull(false),
    Default(0),
    Column({ type: DataType.FLOAT }),
    __metadata("design:type", Number)
], Order.prototype, "tax", void 0);
__decorate([
    AllowNull(false),
    Default(""),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Order.prototype, "promo", void 0);
__decorate([
    AllowNull(false),
    Default(0),
    Column({ type: DataType.FLOAT }),
    __metadata("design:type", Number)
], Order.prototype, "discount", void 0);
__decorate([
    AllowNull(false),
    Default(0),
    Column({ type: DataType.FLOAT }),
    __metadata("design:type", Number)
], Order.prototype, "grandTotal", void 0);
__decorate([
    AllowNull(false),
    Column({ type: DataType.INTEGER }),
    __metadata("design:type", Number)
], Order.prototype, "status", void 0);
__decorate([
    AllowNull(false),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Order.prototype, "fullName", void 0);
__decorate([
    AllowNull(false),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Order.prototype, "email", void 0);
__decorate([
    AllowNull(false),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Order.prototype, "mobile", void 0);
__decorate([
    AllowNull(false),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Order.prototype, "city", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Order.prototype, "line1", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Order.prototype, "line2", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Order.prototype, "content", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Order.prototype, "country", void 0);
__decorate([
    CreatedAt,
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
__decorate([
    UpdatedAt,
    __metadata("design:type", Date)
], Order.prototype, "updatedAt", void 0);
__decorate([
    HasMany(() => OrderItems),
    __metadata("design:type", Array)
], Order.prototype, "orderItem", void 0);
__decorate([
    HasMany(() => Transaction),
    __metadata("design:type", Array)
], Order.prototype, "pay", void 0);
Order = __decorate([
    Table({
        freezeTableName: true,
        timestamps: true,
        tableName: "order",
    })
], Order);
export default Order;
//# sourceMappingURL=Order.js.map