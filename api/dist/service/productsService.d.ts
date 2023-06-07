export declare const InsertProductOnCategory: (categoryId: number, productId: number) => Promise<boolean>;
export declare const CreateProduct: (data: any) => Promise<boolean>;
export declare const UpdateProductOnCategory: (data: any, productId: number) => Promise<boolean>;
export declare const DeleteProductById: (productId: number) => Promise<boolean>;
export declare const GetProductById: (productId: number) => Promise<false | import("../models/index.js").Products[]>;
export declare const GetProductsByTitle: (title: string) => Promise<false | import("../models/index.js").Products[]>;
