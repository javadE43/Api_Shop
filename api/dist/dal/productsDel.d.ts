import Products, { OutPutProductsOnCategory, ProductInput, UpdateProduct } from "../models/bo/Product.js";
import { Transaction } from "sequelize";
export declare const InsertProductOnCategory: (categoryId: number, productId: number, t: Transaction) => Promise<boolean>;
export declare const UpdateProductOnCategory: (categoryId: number, productId: number, t?: Transaction) => Promise<boolean>;
export declare const CreateProduct: (data: ProductInput, t: Transaction) => Promise<number>;
export declare const GetProductsByTitle: (productTitle: string | undefined, offset: number, limit: number) => Promise<false | {
    rows: Products[];
    count: number;
}>;
export declare const GetProductById: (productId: number, t?: Transaction) => Promise<boolean | OutPutProductsOnCategory>;
export declare const UpdateProductById: (data: UpdateProduct, productId: number, t: Transaction) => Promise<boolean>;
export declare const DeleteProductById: (productId: number, t: Transaction) => Promise<boolean>;
export declare const GetProductsByIds: (ids: number[]) => Promise<Products[]>;
