import { Model, DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import { sequelize } from "./index.js";
export class User extends Model {
}
User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    vender: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: null,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
}, {
    sequelize: sequelize,
    hooks: {
        beforeSave: async (user) => {
            const p = user.password;
            const hash = await bcrypt.hash(p, 10);
            user.password = hash;
        },
    },
    tableName: "users",
    modelName: "user",
});
import { Token } from "./Token.js";
User.hasMany(Token);
Token.belongsTo(User);
//# sourceMappingURL=User.js.map