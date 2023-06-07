import { Model, DataTypes } from "sequelize";
import { sequelize } from "./index.js";
export class Product_category extends Model {
}
Product_category.init({
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: sequelize,
    tableName: "product_category",
    modelName: "product_category"
});
//# sourceMappingURL=product_category.js.map