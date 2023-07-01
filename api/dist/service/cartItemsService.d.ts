import { Transaction } from "sequelize";
import { FindAllItemsParams } from "../dal/dataSort/helperCartItems.js";
import { CartItemsInput } from "../models/bo/CartItems.js";
export declare const CreateCartItems: (data: CartItemsInput[], cartId: number, t: Transaction) => Promise<boolean>;
export declare const AddItemsInCartByCartId: (data: CartItemsInput, cartId: number, t: Transaction) => Promise<boolean>;
export declare const updateQuantityByCartIdAndProductId: (quantity: number, cartId: number, productId: number, t: Transaction) => Promise<boolean>;
export declare const RemoveCartItemsByCartIdAndProductID: (cartId: number, productId: number, t: Transaction) => Promise<boolean>;
export declare const RemoveAllItems: (cartId: number, t: Transaction) => Promise<boolean>;
export declare const FindAllItems: (data: FindAllItemsParams) => Promise<false | import("../models/bo/CartItems.js").default[]>;
