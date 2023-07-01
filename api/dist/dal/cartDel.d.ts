import { Transaction } from "sequelize";
import { CartInput, FindAttributesCart } from "../models/bo/Cart.js";
import { PaginationData } from "./dataSort/pagination.js";
export declare const CreateCart: (data: CartInput, t: Transaction) => Promise<number>;
export declare const GetCartByToken: (token: string, t?: Transaction) => Promise<boolean | FindAttributesCart>;
export declare const GetCartByUserId: (userId: number) => Promise<boolean | FindAttributesCart>;
export declare const GetAllCart: (token: string | null, userId: number | null, cartId: number | null, offset: number, limit: number) => Promise<boolean | PaginationData>;
export declare const DeleteCart: (token: string, t: Transaction) => Promise<boolean>;
export declare const UpdateStausCart: (token: string, status: number, t: Transaction) => Promise<boolean>;
