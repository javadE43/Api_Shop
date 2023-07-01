export const conditionGetAllCartItems = (token, cartId) => {
    let option;
    if (token && !cartId) {
        option = { token: token };
    }
    else if (cartId && !token) {
        option = { cartId: cartId };
    }
    else {
        option = undefined;
    }
    return option;
};
//# sourceMappingURL=helperCartItems.js.map