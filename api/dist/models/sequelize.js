import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);
dotenv.config({ path: path.join(__dirname, "..", "/.env") });
const env = process.env.NODE_ENV || "development";
import { configDB } from "../config/configDB.js";
import User, { numberof } from "./bo/User.js";
import Token from "./bo/Token.js";
import Products from "./bo/Product.js";
import Permission from "./bo/Premission.js";
import Categorys from "./bo/Category.js";
import Role from "./bo/Role.js";
import RoleHasPermission from "./bo/Role_Has_Permission.js";
import Product_category from "./bo/product_category.js";
const DB = configDB[env];
console.log(DB);
let sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASS, {
    host: process.env.HOST,
    dialect: "mysql",
    define: {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: true,
    },
});
console.log(numberof);
sequelize.addModels([
    User,
    Categorys,
    Permission,
    Products,
    Product_category,
    Role,
    RoleHasPermission,
    Token,
]);
export { Sequelize, sequelize };
//# sourceMappingURL=sequelize.js.map