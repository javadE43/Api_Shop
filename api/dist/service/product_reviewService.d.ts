import { Transaction } from "sequelize";
export declare const CreateProductReview: (data: any, productId: number, t: Transaction) => Promise<boolean>;
export declare const UpdateProductReview: (data: any, productId: number, t?: Transaction) => Promise<boolean>;
export declare const DeleteProductReview: (productId: number) => Promise<boolean>;
