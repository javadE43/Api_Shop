export const conditionGetAllCart = (cartId, token, userId, Op) => {
    let option;
    if (token && !userId) {
        option = { token: { [Op.substring]: token } };
    }
    else if (userId && !token) {
        option = { userId: userId };
    }
    else if (cartId && !userId && !token) {
        option = { id: cartId };
    }
    else if (userId && token) {
        option = {
            token: { [Op.substring]: token },
            userId: userId
        };
    }
    else {
        option = undefined;
    }
    return option;
};
//# sourceMappingURL=helperCartDel.js.map