import { Product_review } from "../models/index.js";
export const CreateProductReview = async (data, productId, t) => {
    const create = await Product_review.create({ ...data, productId }, { transaction: t });
    return create ? true : false;
};
export const UpdateProductReview = async (data, productId, t) => {
    const update = await Product_review.update(data, { where: { productId }, transaction: t ? t : null });
    return !!update[0] ? true : false;
};
export const DeleteProductReview = async (productId) => {
    const remove = await Product_review.destroy({ where: { productId } });
    return !!remove ? true : false;
};
//# sourceMappingURL=product_reviewDel.js.map