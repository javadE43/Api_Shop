import { fileURLToPath } from "url";
import path, { dirname } from "path";
const filename = fileURLToPath(import.meta.url);
//
import * as dotenv from "dotenv";
import mysql from "mysql2/promise";
import { sequelize } from "../models/sequelize.js";
import  Permission  from "../models/bo/Premission.js";
import  Role  from "../models/bo/Role.js";
import RoleHasPermission  from "../models/bo/Role_Has_Permission.js";
import User from "../models/bo/User.js";

const __dirname = dirname(filename);
dotenv.config({ path: path.join(__dirname, "..", "/.env") });
dotenv.config();
export const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.HOST,
      port: process.env.PORTDB,
      user: process.env.USER,
      password: process.env.PASS,
    });
    // await connection.query(
    //   `DROP DATABASE IF EXISTS \`${process.env.DB}\`;`
    // );
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB}\`;`);

    await sequelize.sync({ force: false, alter: true });
    process.env.NODE_ENV == "development" && console.log("connection database");
    initial();
  } catch (error) {
    process.env.NODE_ENV == "development" && console.error(error);
  }
};

function initial() {
  Permission.findAll()
    .then((item) => {
      if (!item || item.length < 1) {
        Permission.bulkCreate([
          { name: "get", bits: 2 },
          { name: "post", bits: 4 },
          { name: "edite", bits: 8 },
          { name: "delete", bits: 16 },
        ]);
      }
    })
    .then(() => {
      Role.findAll()
        .then((role) => {
          if (!role || role.length < 1) {
            Role.bulkCreate([{ name: "user" }, { name: "edite" }, { name: "admin" }]);
          }
        })
        .then(() => {
          RoleHasPermission.findAll().then((roleHasPermission) => {
            if (roleHasPermission.length < 1 || !roleHasPermission) {
              RoleHasPermission.bulkCreate([
                { roleId: 1, permissionId: 1 },
                { roleId: 2, permissionId: 1 },
                { roleId: 2, permissionId: 2 },
                { roleId: 2, permissionId: 3 },
                { roleId: 3, permissionId: 1 },
                { roleId: 3, permissionId: 2 },
                { roleId: 3, permissionId: 3 },
                { roleId: 3, permissionId: 4 },
              ]);
            }
          });
        });
    });
  User.findAll().then((user) => {
    if (user.length < 1 || !user) {
      User.create({
        firstname: "javad",
        lastname: "ahmadi",
        username: "javad43",
        mobile: "09367394353",
        email: "javadahmadi20034@gmail.com",
        password: "435343javad",
        roleId: 3,
      });
    }
  });
}
