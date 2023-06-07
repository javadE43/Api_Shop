import Products, { ProductInput, UpdateProduct } from "../models/bo/Product.js";
export declare const InsertProductOnCategory: (categoryId: number, productId: number) => Promise<boolean>;
export declare const UpdateProductOnCategory: (categoryId: number, productId: number) => Promise<boolean>;
export declare const CreateProduct: (data: ProductInput) => Promise<boolean>;
export declare const GetProductsByTitle: (productTitle: string) => Promise<false | Products[]>;
export declare const GetProductById: (productId: number) => Promise<false | Products[]>;
export declare const UpdateProductById: (data: UpdateProduct, productId: number) => Promise<boolean>;
export declare const DeleteProductById: (productId: number) => Promise<boolean>;
