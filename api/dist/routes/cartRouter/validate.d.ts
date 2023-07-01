export declare const validate: {
    create(): import("express-validator").ValidationChain[];
    AddToCartItem(): import("express-validator").ValidationChain[];
    GetCartByToken(): import("express-validator").ValidationChain[];
    GetCartByUserId(): import("express-validator").ValidationChain[];
    GetAllCart(): import("express-validator").ValidationChain[];
    UpdateQuantity(): import("express-validator").ValidationChain[];
    RemoveItemCart(): import("express-validator").ValidationChain[];
    DeleteCartByToken(): import("express-validator").ValidationChain[];
};
