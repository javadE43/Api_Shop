import { Transaction } from "sequelize";
interface Update {
    title: string;
    content: string;
    rating: number;
}
export declare const CreateProductReview: (data: any, productId: number, t: Transaction) => Promise<boolean>;
export declare const UpdateProductReview: (data: Update, productId: number, t?: Transaction) => Promise<boolean>;
export declare const DeleteProductReview: (productId: number) => Promise<boolean>;
export {};
