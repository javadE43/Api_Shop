import { body, query, cookie } from "express-validator";
import { Cart, Products, User } from "../../models/index.js";
export const validate = new (class Validate {
    create() {
        return [
            body("userId").custom(async (userId) => {
                const id = Number(userId);
                if (!userId) {
                    return true;
                }
                else if (Number.isInteger(id) === false) {
                    return Promise.reject("invalid userId");
                }
                else {
                    const user = await User.findByPk(id);
                    return user ? true : Promise.reject("invalid user");
                }
            }),
            body("fullName")
                .exists()
                .withMessage("required fullName")
                .notEmpty()
                .withMessage("The name cannot be empty")
                .isLength({ max: 50 })
                .withMessage("The name cannot be more than 50 characters"),
            body("email")
                .exists()
                .withMessage("required email")
                .isEmail()
                .withMessage("The email cannot be empty")
                .matches(/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi)
                .withMessage("Invalid email"),
            body("mobile")
                .exists()
                .withMessage("required mobile")
                .notEmpty()
                .withMessage("The mobil cannot be empty")
                .isLength({ min: 11, max: 11 })
                .withMessage("The mobil cannot be less than 11 characters or more than 11 characters"),
            body("content")
                .isLength({ max: 255 })
                .withMessage("The name cannot be more than 255 characters"),
            body("city")
                .isLength({ max: 255 })
                .withMessage("The name cannot be more than 255 characters"),
            body("cuntry")
                .isLength({ max: 255 })
                .withMessage("The name cannot be more than 255 characters"),
        ];
    }
    AddToCartItem() {
        return [
            query("tokenCart").custom(async (tokenCart) => {
                if (!tokenCart) {
                    return true;
                }
                else {
                    const cart = await Cart.findOne({ where: { token: tokenCart } });
                    return cart ? true : Promise.reject("there is not cart By Token");
                }
            }),
            cookie("cart").custom(async (cookie) => {
                if (!cookie) {
                    return true;
                }
                else {
                    const cart = await Cart.findOne({ where: { token: cookie } });
                    return cart ? true : Promise.reject("there is not cart By Token");
                }
            }),
            body("productId")
                .notEmpty()
                .withMessage("there is not productId")
                .custom(async (productId) => {
                const id = Number(productId);
                if (Number.isInteger(id) === false) {
                    return Promise.reject("invalid productId");
                }
                else {
                    const product = await Products.findByPk(id);
                    return product ? true : Promise.reject("invalid productId");
                }
            }),
            body("price")
                .notEmpty()
                .withMessage("there is not price")
                .isFloat()
                .withMessage("there is not float price")
                .toFloat(),
            body("discount")
                .notEmpty()
                .withMessage("there is not discount")
                .isFloat()
                .withMessage("there is not float discount")
                .toFloat(),
            body("quantity")
                .notEmpty()
                .withMessage("there is not quantity")
                .isInt()
                .withMessage("there is not integer quantity")
                .toInt(),
            body("active")
                .notEmpty()
                .withMessage("there is not active")
                .isBoolean()
                .withMessage("there is not boolean active"),
        ];
    }
    GetCartByToken() {
        return [
            cookie("cart")
                .notEmpty()
                .withMessage("there is not token cart")
                .custom(async (cookie) => {
                if (!cookie) {
                    return Promise.reject("there is not token cart");
                }
                else {
                    const cart = await Cart.findOne({ where: { token: cookie } });
                    return cart ? true : Promise.reject("there is not cart By Token");
                }
            }),
        ];
    }
    GetCartByUserId() {
        return [
            query("userId")
                .notEmpty()
                .withMessage("there is not userId")
                .custom(async (userId) => {
                const id = Number(userId);
                if (Number.isInteger(id) === false) {
                    return Promise.reject("there is not user By userId");
                }
                else {
                    const user = await User.findByPk(id);
                    return user ? true : Promise.reject("there is not user By Token");
                }
            }),
        ];
    }
    GetAllCart() {
        return [
            query("userId").custom(async (userId) => {
                const id = Number(userId);
                if (Number.isInteger(id) === false) {
                    return true;
                }
                else {
                    const user = await User.findByPk(id);
                    return user ? true : Promise.reject("there is not user By Token");
                }
            }),
            query("tokenCart").custom(async (tokenCart) => {
                if (!tokenCart) {
                    return true;
                }
                else {
                    const cart = await Cart.findOne({ where: { token: tokenCart } });
                    return cart ? true : Promise.reject("there is not cart By Token");
                }
            }),
        ];
    }
    UpdateQuantity() {
        return [
            query("tokenCart").custom(async (tokenCart) => {
                if (!tokenCart) {
                    return true;
                }
                else {
                    const cart = await Cart.findOne({ where: { token: tokenCart } });
                    return cart ? true : Promise.reject("there is not cart By Token");
                }
            }),
            cookie("cart").custom(async (cookie) => {
                if (!cookie) {
                    return true;
                }
                else {
                    const cart = await Cart.findOne({ where: { token: cookie } });
                    return cart ? true : Promise.reject("there is not cart By Token");
                }
            }),
            query("productId")
                .notEmpty()
                .withMessage("there is not productId")
                .custom(async (productId) => {
                const id = Number(productId);
                if (Number.isInteger(id) === false) {
                    return Promise.reject("there is not productId");
                }
                else {
                    const product = await Products.findByPk(id);
                    return product ? true : Promise.reject("there is not product By productId");
                }
            }),
            query("quantity")
                .notEmpty()
                .withMessage("there is not quantity")
                .custom((quantity) => {
                const quan = Number(quantity);
                if (Number.isInteger(quan) === false) {
                    return Promise.reject("there is not quantity");
                }
                else {
                    return true;
                }
            }),
        ];
    }
    RemoveItemCart() {
        return [
            query("tokenCart").custom(async (tokenCart) => {
                if (!tokenCart) {
                    return true;
                }
                else {
                    const cart = await Cart.findOne({ where: { token: tokenCart } });
                    return cart ? true : Promise.reject("there is not cart By Token");
                }
            }),
            cookie("cart").custom(async (cookie) => {
                if (!cookie) {
                    return true;
                }
                else {
                    const cart = await Cart.findOne({ where: { token: cookie } });
                    return cart ? true : Promise.reject("there is not cart By Token");
                }
            }),
            query("productId")
                .notEmpty()
                .withMessage("there is not productId")
                .custom(async (productId) => {
                const id = Number(productId);
                if (Number.isInteger(id) === false) {
                    return Promise.reject("there is not productId");
                }
                else {
                    const product = await Products.findByPk(id);
                    return product ? true : Promise.reject("there is not product By productId");
                }
            }),
        ];
    }
    DeleteCartByToken() {
        return [
            cookie("cart").custom(async (cookie) => {
                if (!cookie) {
                    return true;
                }
                else {
                    const cart = await Cart.findOne({ where: { token: cookie } });
                    return cart ? true : Promise.reject("there is not cart By Token");
                }
            }),
            query("tokenCart").custom(async (tokenCart) => {
                if (!tokenCart) {
                    return true;
                }
                else {
                    const cart = await Cart.findOne({ where: { token: tokenCart } });
                    return cart ? true : Promise.reject("there is not cart By Token");
                }
            }),
        ];
    }
})();
//# sourceMappingURL=validate.js.map