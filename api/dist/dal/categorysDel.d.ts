import Categorys from "../models/bo/Category.js";
export declare const createNewCategory: (data: any) => Promise<false | Categorys>;
export declare const GetByTilte: (title: string) => Promise<Categorys[]>;
