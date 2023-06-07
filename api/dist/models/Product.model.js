var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Product_1;
import { Table, Column, DataType, Model, BelongsToMany, } from "sequelize-typescript";
import { Product_category } from "./product_category.model.js";
let Product = Product_1 = class Product extends Model {
};
__decorate([
    Column({
        type: DataType.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "product_id",
    }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    BelongsToMany(() => Product_1, () => Product_category),
    __metadata("design:type", Array)
], Product.prototype, "categorys", void 0);
Product = Product_1 = __decorate([
    Table({
        freezeTableName: true,
        tableName: "products",
    })
], Product);
export { Product };
//# sourceMappingURL=Product.model.js.map