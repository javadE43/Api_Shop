import * as productsDel from "../dal/productsDel.js";
export const InsertProductOnCategory = async (categoryId, productId) => {
    return productsDel.InsertProductOnCategory(categoryId, productId);
};
export const CreateProduct = async (data) => {
    return productsDel.CreateProduct(data);
};
export const UpdateProductOnCategory = async (data, productId) => {
    return productsDel.UpdateProductOnCategory(data, productId);
};
export const DeleteProductById = async (productId) => {
    return productsDel.DeleteProductById(productId);
};
export const GetProductById = async (productId) => {
    return productsDel.GetProductById(productId);
};
export const GetProductsByTitle = async (title) => {
    return productsDel.GetProductsByTitle(title);
};
//# sourceMappingURL=productsService.js.map