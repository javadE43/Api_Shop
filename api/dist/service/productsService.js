import { paginationData } from "../dal/dataSort/pagination.js";
import * as productsDel from "../dal/productsDel.js";
import { RemoveImage } from "../helper/removeImage.js";
import { sequelize } from "../models/sequelize.js";
import * as revieweService from "./product_reviewService.js";
export const InsertProductOnCategory = async (categoryId, productId) => {
    const result = await sequelize.transaction(async (t) => {
        const tableJoin = await productsDel.InsertProductOnCategory(categoryId, productId, t);
        if (tableJoin) {
            throw new Error("Request Filed");
        }
        return true;
    });
    return result;
};
export const CreateProduct = async (data) => {
    const result = await sequelize.transaction(async (t) => {
        const product = await productsDel.CreateProduct(data, t);
        if (!!product) {
            const review = await revieweService.CreateProductReview(data, product, t);
            if (review === false) {
                if (data.images) {
                    RemoveImage(JSON.parse(`${data.images}`));
                }
                throw new Error("Request Filed");
            }
        }
        if (data.categoryId && !!product) {
            const tableJoin = await productsDel.InsertProductOnCategory(data.categoryId, product, t);
            if (tableJoin === false) {
                if (data.images) {
                    RemoveImage(JSON.parse(`${data.images}`));
                }
                throw new Error("Request Filed");
            }
        }
        return true;
    });
    return result;
};
export const UpdateProductOnCategory = async (data, productId) => {
    const result = await sequelize.transaction(async (t) => {
        const update = await productsDel.UpdateProductOnCategory(data, productId, t);
        if (update) {
            throw new Error("Request Filed");
        }
        return true;
    });
    return result;
};
export const UpdateProductById = async (data, productId) => {
    const result = await sequelize.transaction(async (t) => {
        const pro = await productsDel.GetProductById(productId, t);
        const ArrayImage = [];
        if (data.images && typeof pro !== "boolean") {
            const imgA = JSON.parse(`${data.images}`);
            if (pro.images !== undefined) {
                imgA?.map((m, index) => {
                    if (pro.images !== undefined && pro.images[index]) {
                        ArrayImage.push(pro.images[index]);
                    }
                    pro.images !== undefined ? pro.images[index] = m : undefined;
                });
                data.images = JSON.stringify(pro.images);
            }
        }
        const update = await productsDel.UpdateProductById(data, productId, t);
        if (update === false && pro === false) {
            if (data.images) {
                RemoveImage(JSON.parse(`${data.images}`));
            }
            throw new Error("Request Fild");
        }
        if (data.categoryId && update) {
            const tableJoin = await productsDel.UpdateProductOnCategory(data.categoryId, productId, t);
            if (tableJoin === false) {
                if (data.images) {
                    RemoveImage(JSON.parse(`${data.images}`));
                }
                throw new Error("Request Fild");
            }
        }
        if (data.title | data.content | data.rating) {
            const review = await revieweService.UpdateProductReview(data, productId, t);
            if (review === false) {
                if (data.images) {
                    RemoveImage(JSON.parse(`${data.images}`));
                }
                throw new Error("Request Filed");
            }
        }
        if (ArrayImage.length > 0) {
            RemoveImage(ArrayImage);
        }
        return true;
    });
    return result;
};
export const GetProductById = async (productId) => {
    return productsDel.GetProductById(productId);
};
export const GetProductsByTitle = async (title, offset, limit) => {
    const pro = await productsDel.GetProductsByTitle(title, offset, limit);
    if (pro === false) {
        return pro;
    }
    const products = pro.rows.map((p) => {
        p.images = JSON.parse(`${p.images}`);
        return p;
    });
    paginationData(products, pro.count, limit, offset);
    return paginationData(products, pro.count, limit, offset);
};
export const DeleteProductById = async (productId) => {
    const result = await sequelize.transaction(async (t) => {
        const pro = await productsDel.GetProductById(productId, t);
        const remove = await productsDel.DeleteProductById(productId, t);
        if (typeof pro === "boolean") {
            throw new Error("Request Filed");
        }
        if (remove === false) {
            throw new Error("Request Filed");
        }
        if (pro.images !== undefined && pro.images.length > 0) {
            RemoveImage(pro.images);
        }
        return true;
    });
    return result;
};
export const GetProductsByIds = async (ids) => {
    const products = await productsDel.GetProductsByIds(ids);
    return products;
};
//# sourceMappingURL=productsService.js.map