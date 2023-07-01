import { Transaction } from "sequelize";
import { CategoryInput, GetByTilteInterface, UpdateDataParams } from "../models/bo/Category.js";
import { PaginationData } from "./dataSort/pagination.js";
export declare const createNewCategory: (data: CategoryInput, t: Transaction) => Promise<boolean>;
export declare const UpdateById: (data: UpdateDataParams, categoryId: number, t: Transaction) => Promise<boolean>;
export declare const DeleteById: (categoryId: number, t: Transaction) => Promise<boolean>;
export declare const GetById: (categoryId: number, t?: Transaction) => Promise<GetByTilteInterface | boolean>;
export declare const GetALLCategorys: (categoryName: string, content: string, limit: number, offset: number) => Promise<PaginationData | boolean>;
export declare const GetByTilte: (title: string) => Promise<GetByTilteInterface[]>;
