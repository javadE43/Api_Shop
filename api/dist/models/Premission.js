import { Model, DataTypes } from "sequelize";
import { sequelize } from "./index.js";
export class Permission extends Model {
}
Permission.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bits: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
}, {
    sequelize: sequelize,
    tableName: "permissions",
    modelName: "permission",
});
import { Role } from "./Role.js";
Permission.belongsToMany(Role, {
    through: "roleHasPermission",
    constraints: false,
});
//# sourceMappingURL=Premission.js.map