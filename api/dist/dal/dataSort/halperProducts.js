export const conditionGetAllProducts = (productTitle, Op) => {
    let option;
    if (productTitle) {
        option = { title: { [Op.substring]: productTitle } };
    }
    else {
        option = undefined;
    }
    return option;
};
//# sourceMappingURL=halperProducts.js.map