var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType, ForeignKey, AllowNull, Default, Unique, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt, } from "sequelize-typescript";
import { Products } from "../index.js";
let Product_review = class Product_review extends Model {
};
__decorate([
    AutoIncrement,
    AllowNull(false),
    PrimaryKey,
    Unique(true),
    Column({ type: DataType.BIGINT }),
    __metadata("design:type", Number)
], Product_review.prototype, "id", void 0);
__decorate([
    ForeignKey(() => Products),
    __metadata("design:type", Number)
], Product_review.prototype, "productId", void 0);
__decorate([
    Column({ type: DataType.BIGINT }),
    __metadata("design:type", Number)
], Product_review.prototype, "parentId", void 0);
__decorate([
    Default(""),
    Column({ type: DataType.STRING }),
    __metadata("design:type", String)
], Product_review.prototype, "title", void 0);
__decorate([
    Default(0),
    Column({ type: DataType.INTEGER }),
    __metadata("design:type", Number)
], Product_review.prototype, "rating", void 0);
__decorate([
    Column({ type: DataType.TEXT }),
    __metadata("design:type", String)
], Product_review.prototype, "content", void 0);
__decorate([
    CreatedAt,
    __metadata("design:type", Date)
], Product_review.prototype, "createdAt", void 0);
__decorate([
    UpdatedAt,
    __metadata("design:type", Date)
], Product_review.prototype, "updatedAt", void 0);
Product_review = __decorate([
    Table({
        freezeTableName: true,
        timestamps: true,
        tableName: "product_review",
    })
], Product_review);
export default Product_review;
//# sourceMappingURL=Product_review.js.map