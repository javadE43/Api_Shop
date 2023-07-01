import * as productReview from "../dal/product_reviewDel.js";
export const CreateProductReview = async (data, productId, t) => {
    const create = await productReview.CreateProductReview(data, productId, t);
    return create;
};
export const UpdateProductReview = (data, productId, t) => {
    const update = productReview.UpdateProductReview(data, productId, t);
    return update;
};
export const DeleteProductReview = (productId) => {
    const remove = productReview.DeleteProductReview(productId);
    return remove;
};
//# sourceMappingURL=product_reviewService.js.map