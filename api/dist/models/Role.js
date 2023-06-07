import { Model, DataTypes } from "sequelize";
import { sequelize } from "./index.js";
export class Role extends Model {
}
Role.init({
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
        type: DataTypes.STRING,
        allowNull: false,
        get() {
            const storebits = this.getDataValue('bits');
            const bits = JSON.parse(`${storebits}`);
            return bits;
        }
    },
}, {
    sequelize: sequelize,
    tableName: "roles",
    modelName: "role",
});
import { Permission } from "./Premission.js";
import { User } from "./User.js";
Role.belongsToMany(Permission, { through: "roleHasPermission" });
Role.hasMany(User);
User.belongsTo(Role);
//# sourceMappingURL=Role.js.map