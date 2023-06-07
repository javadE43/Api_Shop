import path, { dirname } from "path";
import { fileURLToPath } from "url";
//
import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
//
const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);
//
dotenv.config({ path: path.join(__dirname, "..", "/.env") });
const env = process.env.NODE_ENV || "development";
import { configDB } from "../config/configDB.js";
import {
  User,
  Token,
  Products,
  Premission,
  Categorys,
  Role,
  Role_Has_Permission,
  product_category,
  Product_review,
  Cart,
  CartItems,
  Order,
  OrderItems,
  Transaction
} from "./index.js";
//
const DB = configDB[env];
console.log(DB);
//
let sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASS, {
  host: process.env.HOST,
  dialect: "mysql",
  // pool: {
  //   max: process.env.MAX,
  //   min: Number(process.env.MIN),
  //   acquire: process.env.ACQUIRE,
  //   idle: process.env.IDLE,
  // },
  define: {
    charset: "utf8",
    collate: "utf8_general_ci",
    timestamps: true,
  },
});

sequelize.addModels([
  User,
  Categorys,
  Premission,
  Products,
  product_category,
  Role,
  Role_Has_Permission,
  Token,
  Product_review,
  CartItems,
  Cart,
  Order,
  OrderItems,
  Transaction
]);

export { Sequelize, sequelize };
