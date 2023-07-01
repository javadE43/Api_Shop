var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, ForeignKey, CreatedAt, UpdatedAt, DataType, Unique, PrimaryKey, AutoIncrement, AllowNull, BelongsTo } from "sequelize-typescript";
import { Cart, Products } from "../index.js";
let CartItems = class CartItems extends Model {
};
__decorate([
    AllowNull(false),
    AutoIncrement,
    PrimaryKey,
    Unique(true),
    Column({ type: DataType.BIGINT }),
    __metadata("design:type", Number)
], CartItems.prototype, "id", void 0);
__decorate([
    ForeignKey(() => Products),
    __metadata("design:type", Number)
], CartItems.prototype, "productId", void 0);
__decorate([
    ForeignKey(() => Cart),
    __metadata("design:type", Number)
], CartItems.prototype, "cartId", void 0);
__decorate([
    Column({ type: DataType.FLOAT }),
    __metadata("design:type", Number)
], CartItems.prototype, "price", void 0);
__decorate([
    Column({ type: DataType.INTEGER }),
    __metadata("design:type", Number)
], CartItems.prototype, "discount", void 0);
__decorate([
    Column({ type: DataType.INTEGER }),
    __metadata("design:type", Number)
], CartItems.prototype, "quantity", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], CartItems.prototype, "sku", void 0);
__decorate([
    Column({ type: DataType.BOOLEAN }),
    __metadata("design:type", Boolean)
], CartItems.prototype, "active", void 0);
__decorate([
    Column({ type: DataType.TEXT }),
    __metadata("design:type", String)
], CartItems.prototype, "content", void 0);
__decorate([
    CreatedAt,
    __metadata("design:type", String)
], CartItems.prototype, "createdAt", void 0);
__decorate([
    UpdatedAt,
    __metadata("design:type", String)
], CartItems.prototype, "updatedAt", void 0);
__decorate([
    BelongsTo(() => Products),
    __metadata("design:type", Array)
], CartItems.prototype, "products", void 0);
CartItems = __decorate([
    Table({
        freezeTableName: true,
        tableName: "CartItems",
        timestamps: true,
    })
], CartItems);
export default CartItems;
//# sourceMappingURL=CartItems.js.map