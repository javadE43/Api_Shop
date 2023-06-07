const { Model } = require("sequelize");
module.exports = (db, DataTypes) => {
    class Category extends Model {
        static associate() {
        }
    }
    Category.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        metatitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize: db,
        timestamps: true,
        tableName: 'category',
        modelName: 'category'
    });
    return Category;
};
export {};
//# sourceMappingURL=Category.js.map