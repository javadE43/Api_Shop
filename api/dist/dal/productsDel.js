import Products from "../models/bo/Product.js";
import Product_category from "../models/bo/product_category.js";
import _ from "lodash";
import { Op } from "sequelize";
import Categorys from "../models/bo/Category.js";
import User from "../models/bo/User.js";
export const InsertProductOnCategory = async (categoryId, productId) => {
    const insertProOnCate = await Product_category.create({ categoryId, productId });
    if (!insertProOnCate) {
        return false;
    }
    else {
        return true;
    }
};
export const UpdateProductOnCategory = async (categoryId, productId) => {
    const updateProOnCate = await Product_category.findOne({
        where: { [Op.and]: [{ categoryId }, { productId }] },
    });
    if (!updateProOnCate) {
        return false;
    }
    else {
        updateProOnCate.set({
            categoryId,
            productId,
        });
        await updateProOnCate.save();
        return true;
    }
};
export const CreateProduct = async (data) => {
    const dataPro = _.omit(data, ["categoryId"]);
    const product = await Products.create({ ...dataPro, userId: Number(data.userId) });
    if (data.categoryId && product) {
        const tableJoin = await InsertProductOnCategory(data.categoryId, product.id);
        return tableJoin ? true : false;
    }
    else if (!product) {
        return false;
    }
    else {
        return true;
    }
};
export const GetProductsByTitle = async (productTitle) => {
    const pro = await Products.findAll({
        where: { title: { [Op.substring]: productTitle } },
        include: [
            {
                model: Categorys,
                through: { attributes: [] },
            },
            {
                model: User,
                through: { attributes: [] },
            },
        ],
    });
    if (!pro) {
        return false;
    }
    else {
        return pro;
    }
};
export const GetProductById = async (productId) => {
    const pro = await Products.findAll({
        where: { id: productId },
        include: [
            {
                model: Categorys,
                through: { attributes: [] },
            },
        ],
    });
    if (!pro) {
        return false;
    }
    else {
        return pro;
    }
};
export const UpdateProductById = async (data, productId) => {
    const dataPro = _.omit(data, ["categoryId"]);
    const update = await Products.update(dataPro, { where: { id: productId } });
    if (data?.categoryId && update[0]) {
        const tableJoin = await UpdateProductOnCategory(data.categoryId, productId);
        return tableJoin;
    }
    return !!update[0] ? true : false;
};
export const DeleteProductById = async (productId) => {
    const remove = await Products.destroy({ where: { id: productId } });
    return !!remove ? true : false;
};
//# sourceMappingURL=productsDel.js.map