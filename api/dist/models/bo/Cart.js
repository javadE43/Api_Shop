var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, ForeignKey, CreatedAt, UpdatedAt, DataType, Unique, PrimaryKey, AutoIncrement, AllowNull, Default, HasMany, BelongsTo } from "sequelize-typescript";
import { CartItems, User } from "../index.js";
let Cart = class Cart extends Model {
};
__decorate([
    AllowNull(false),
    AutoIncrement,
    PrimaryKey,
    Unique(true),
    Column({ type: DataType.BIGINT }),
    __metadata("design:type", Number)
], Cart.prototype, "id", void 0);
__decorate([
    ForeignKey(() => User),
    __metadata("design:type", Number)
], Cart.prototype, "userId", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Cart.prototype, "sessionId", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Cart.prototype, "token", void 0);
__decorate([
    Column({ type: DataType.INTEGER }),
    __metadata("design:type", Number)
], Cart.prototype, "status", void 0);
__decorate([
    Default(null),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Cart.prototype, "mobile", void 0);
__decorate([
    Default(null),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Cart.prototype, "fullName", void 0);
__decorate([
    Default(null),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Cart.prototype, "email", void 0);
__decorate([
    Default(null),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Cart.prototype, "lin1", void 0);
__decorate([
    Default(null),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Cart.prototype, "lin2", void 0);
__decorate([
    Default(null),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Cart.prototype, "city", void 0);
__decorate([
    Default(null),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Cart.prototype, "province", void 0);
__decorate([
    Default(null),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Cart.prototype, "country", void 0);
__decorate([
    CreatedAt,
    __metadata("design:type", String)
], Cart.prototype, "createdAt", void 0);
__decorate([
    UpdatedAt,
    __metadata("design:type", String)
], Cart.prototype, "updatedAt", void 0);
__decorate([
    Column({ type: DataType.TEXT("long") }),
    __metadata("design:type", String)
], Cart.prototype, "content", void 0);
__decorate([
    HasMany(() => CartItems),
    __metadata("design:type", Array)
], Cart.prototype, "cartItems", void 0);
__decorate([
    BelongsTo(() => User),
    __metadata("design:type", User)
], Cart.prototype, "user", void 0);
Cart = __decorate([
    Table({
        freezeTableName: true,
        tableName: "cart",
        timestamps: true,
    })
], Cart);
export default Cart;
//# sourceMappingURL=Cart.js.map