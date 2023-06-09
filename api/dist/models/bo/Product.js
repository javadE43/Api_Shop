var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Model, DataType, Column, Table, PrimaryKey, AllowNull, AutoIncrement, Unique, ForeignKey, CreatedAt, UpdatedAt, DeletedAt, BelongsToMany, Default, HasOne, BelongsTo, HasMany, } from "sequelize-typescript";
import Categorys from "./Category.js";
import Product_category from "./product_category.js";
import Product_review from "./Product_review.js";
import User from "./User.js";
import CartItems from "./CartItems.js";
import OrderItems from "./OrderItems.js";
let Products = class Products extends Model {
};
__decorate([
    AllowNull(false),
    PrimaryKey,
    AutoIncrement,
    Unique,
    Column({ type: DataType.BIGINT }),
    __metadata("design:type", Number)
], Products.prototype, "id", void 0);
__decorate([
    AllowNull(false),
    Unique,
    Column({ type: DataType.STRING(100) }),
    __metadata("design:type", String)
], Products.prototype, "title", void 0);
__decorate([
    Default(null),
    Column({ type: DataType.STRING(100) }),
    __metadata("design:type", String)
], Products.prototype, "metatitle", void 0);
__decorate([
    Default(null),
    Column({ type: DataType.STRING(100) }),
    __metadata("design:type", String)
], Products.prototype, "slug", void 0);
__decorate([
    Default(null),
    Column({ type: DataType.STRING(100) }),
    __metadata("design:type", String)
], Products.prototype, "summery", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Products.prototype, "type", void 0);
__decorate([
    AllowNull(false),
    Unique,
    Column({ type: DataType.STRING(100) }),
    __metadata("design:type", String)
], Products.prototype, "sku", void 0);
__decorate([
    Column({ type: DataType.TEXT("long") }),
    __metadata("design:type", String)
], Products.prototype, "images", void 0);
__decorate([
    Column({ type: DataType.FLOAT }),
    __metadata("design:type", Number)
], Products.prototype, "price", void 0);
__decorate([
    Default(0),
    Column({ type: DataType.FLOAT }),
    __metadata("design:type", Number)
], Products.prototype, "discount", void 0);
__decorate([
    Column({ type: DataType.SMALLINT }),
    __metadata("design:type", Number)
], Products.prototype, "quantity", void 0);
__decorate([
    Default(0),
    Column({ type: DataType.TINYINT }),
    __metadata("design:type", Number)
], Products.prototype, "shop", void 0);
__decorate([
    Default(null),
    Column({ type: DataType.TEXT }),
    __metadata("design:type", String)
], Products.prototype, "content", void 0);
__decorate([
    ForeignKey(() => User),
    __metadata("design:type", Number)
], Products.prototype, "userId", void 0);
__decorate([
    CreatedAt,
    __metadata("design:type", Date)
], Products.prototype, "createdAt", void 0);
__decorate([
    UpdatedAt,
    __metadata("design:type", Date)
], Products.prototype, "updatedAt", void 0);
__decorate([
    DeletedAt,
    __metadata("design:type", Date)
], Products.prototype, "deletedAt", void 0);
__decorate([
    BelongsToMany(() => Categorys, {
        through: { model: () => Product_category },
    }),
    __metadata("design:type", Array)
], Products.prototype, "categorys", void 0);
__decorate([
    HasOne(() => Product_review),
    __metadata("design:type", Product_review)
], Products.prototype, "review", void 0);
__decorate([
    HasMany(() => CartItems),
    __metadata("design:type", Array)
], Products.prototype, "items", void 0);
__decorate([
    HasMany(() => OrderItems),
    __metadata("design:type", Array)
], Products.prototype, "orderItems", void 0);
__decorate([
    BelongsTo(() => User),
    __metadata("design:type", User)
], Products.prototype, "user", void 0);
Products = __decorate([
    Table({
        freezeTableName: true,
        timestamps: true,
        tableName: "products",
    })
], Products);
export default Products;
//# sourceMappingURL=Product.js.map