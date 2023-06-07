import path, { dirname } from "path";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);
dotenv.config({ path: path.join(__dirname, "..", "/.env") });

interface Pool {
  max: number;
  min: number;
  acquire: number;
  idle: number;
}

interface ConfigDB {
  [name: string]: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: string;
    pool: Pool;
  };
}

export const configDB: ConfigDB = {
  development: {
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    pool: {
      max: Number(process.env.MAX),
      min: Number(process.env.MIN),
      acquire: Number(process.env.ACQUIRE),
      idle: Number(process.env.IDLE),
    },
  },
  test: {
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    pool: {
      max: Number(process.env.MAX),
      min: Number(process.env.MIN),
      acquire: Number(process.env.ACQUIRE),
      idle: Number(process.env.IDLE),
    },
  },
  production: {
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    pool: {
      max: Number(process.env.MAX),
      min: Number(process.env.MIN),
      acquire: Number(process.env.ACQUIRE),
      idle: Number(process.env.IDLE),
    },
  },
};
