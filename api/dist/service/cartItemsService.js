import * as cartItemsDel from "../dal/cartItemsDel.js";
export const CreateCartItems = async (data, cartId, t) => {
    const create = await cartItemsDel.createCartItems(data, cartId, t);
    return create ? true : false;
};
export const AddItemsInCartByCartId = async (data, cartId, t) => {
    const create = await cartItemsDel.AddItemsInCartByCartId(data, cartId, t);
    return create ? true : false;
};
export const updateQuantityByCartIdAndProductId = async (quantity, cartId, productId, t) => {
    const create = await cartItemsDel.updateQuantityByCartIdAndProductId(quantity, cartId, productId, t);
    return create ? true : false;
};
export const RemoveCartItemsByCartIdAndProductID = async (cartId, productId, t) => {
    const create = await cartItemsDel.RemoveCartItemsByCartIdAndProductID(cartId, productId, t);
    return create ? true : false;
};
export const RemoveAllItems = async (cartId, t) => {
    const create = await cartItemsDel.RemoveAllItems(cartId, t);
    return create ? true : false;
};
export const FindAllItems = async (data) => {
    const items = await cartItemsDel.FindAllItems(data);
    return items;
};
//# sourceMappingURL=cartItemsService.js.map