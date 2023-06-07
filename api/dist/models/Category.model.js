var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Category_1;
import { Table, Column, Model, DataType, BelongsToMany, } from "sequelize-typescript";
import { Product_category } from "./product_category.model.js";
let Category = Category_1 = class Category extends Model {
};
__decorate([
    Column({
        type: DataType.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "category_id",
    }),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
        comment: "category_title",
    }),
    __metadata("design:type", String)
], Category.prototype, "title", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
        comment: "category_slub",
    }),
    __metadata("design:type", String)
], Category.prototype, "slug", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
        comment: "category_metatitle",
    }),
    __metadata("design:type", String)
], Category.prototype, "metatitle", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
        comment: "category_content",
    }),
    __metadata("design:type", String)
], Category.prototype, "content", void 0);
__decorate([
    BelongsToMany(() => Category_1, () => Product_category),
    __metadata("design:type", Array)
], Category.prototype, "products", void 0);
Category = Category_1 = __decorate([
    Table({
        freezeTableName: true,
        tableName: "categorys",
    })
], Category);
export { Category };
//# sourceMappingURL=Category.model.js.map