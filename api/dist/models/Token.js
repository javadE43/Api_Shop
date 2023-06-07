import { Model, DataTypes } from "sequelize";
import { sequelize } from "./index.js";
export class Token extends Model {
}
Token.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: sequelize,
    tableName: "token",
    modelName: "token",
});
//# sourceMappingURL=Token.js.map