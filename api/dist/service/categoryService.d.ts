import { PaginationData } from "../dal/dataSort/pagination.js";
import { CategoryInput, GetByTilteInterface, UpdateDataParams } from "../models/bo/Category.js";
export declare const createNewCategory: (data: CategoryInput) => Promise<boolean>;
export declare const UpdateByIdCategory: (data: UpdateDataParams, id: number) => Promise<boolean>;
export declare const DeleteByIdCategory: (id: number) => Promise<boolean>;
export declare const GetByTilteCategory: (title: string) => Promise<GetByTilteInterface[] | boolean>;
export declare const GetByIdCategory: (id: number) => Promise<GetByTilteInterface | boolean>;
export declare const GetALLCategorys: (title: string, content: string, limit: number, offset: number) => Promise<PaginationData | boolean>;
