import { Op } from "sequelize";
import { CartItems } from "../models/index.js";
import { conditionGetAllCartItems } from "./dataSort/helperCartItems.js";
export const createCartItems = async (data, cartId, t) => {
    const create = await CartItems.bulkCreate(data.map(item => ({ ...item, cartId: cartId })), { transaction: t });
    return create.length > 0 ? true : false;
};
export const AddItemsInCartByCartId = async (data, cartId, t) => {
    const add = await CartItems.create({ ...data, cartId: cartId }, { transaction: t });
    return add ? true : false;
};
export const RemoveCartItemsByCartIdAndProductID = async (cartId, productId, t) => {
    const add = await CartItems.destroy({ where: { [Op.and]: [{ cartId }, { productId }] }, transaction: t });
    return !!add ? true : false;
};
export const updateQuantityByCartIdAndProductId = async (quantity, cartId, productId, t) => {
    const add = await CartItems.update({ quantity }, { where: { [Op.and]: [{ cartId }, { productId }] }, transaction: t });
    return !!add[0] ? true : false;
};
export const RemoveAllItems = async (cartId, t) => {
    const RemoveAll = await CartItems.destroy({ where: { cartId }, transaction: t });
    return !!RemoveAll ? true : false;
};
export const FindAllItems = async (data) => {
    const items = await CartItems.findAll({ where: conditionGetAllCartItems(data.token, data.cartId), transaction: data.t });
    return !!items?.length ? items : false;
};
//# sourceMappingURL=cartItemsDel.js.map