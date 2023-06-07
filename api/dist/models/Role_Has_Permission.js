import { Model, DataTypes } from "sequelize";
import { sequelize } from "./index.js";
export class RoleHasPermission extends Model {
}
RoleHasPermission.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    permissionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: sequelize,
    tableName: "roleHasPermission",
    modelName: "roleHasPermission",
});
//# sourceMappingURL=Role_Has_Permission.js.map