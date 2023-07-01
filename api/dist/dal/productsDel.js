import Products from "../models/bo/Product.js";
import Product_category from "../models/bo/product_category.js";
import _ from "lodash";
import { Op } from "sequelize";
import Categorys from "../models/bo/Category.js";
import User from "../models/bo/User.js";
import { Product_review, Role } from "../models/index.js";
import { conditionGetAllProducts } from "./dataSort/halperProducts.js";
export const InsertProductOnCategory = async (categoryId, productId, t) => {
    const cat = await Categorys.findByPk(categoryId, { transaction: t });
    if (!cat) {
        return false;
    }
    const insertProOnCate = await Product_category.create({ categoryId, productId }, { transaction: t });
    if (!insertProOnCate) {
        return false;
    }
    else {
        return true;
    }
};
export const UpdateProductOnCategory = async (categoryId, productId, t) => {
    const updateProOnCate = await Product_category.findOne({ where: { productId }, transaction: t });
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
export const CreateProduct = async (data, t) => {
    const dataPro = _.omit(data, ["categoryId"]);
    const product = await Products.create({ ...dataPro, userId: Number(data.userId) }, { transaction: t });
    return product ? product.id : 0;
};
export const GetProductsByTitle = async (productTitle, offset, limit) => {
    const pro = await Products.findAndCountAll({
        where: conditionGetAllProducts(productTitle, Op),
        include: [
            {
                model: Categorys,
                through: { attributes: [] },
            },
            {
                model: User,
                attributes: {
                    exclude: ["password", "roleId", "createdAt", "updatedAt", "deletionDate"]
                },
                include: [
                    {
                        model: Role,
                        attributes: ["name"],
                    }
                ]
            },
            {
                model: Product_review,
            },
        ],
        offset,
        limit
    });
    return pro ? pro : false;
};
export const GetProductById = async (productId, t) => {
    const pro = await Products.findOne({
        where: { id: productId },
        include: [
            {
                model: Categorys,
                through: { attributes: [] },
            },
            {
                model: User,
                attributes: {
                    exclude: ["password", "roleId", "createdAt", "updatedAt", "deletionDate"]
                },
                include: [
                    {
                        model: Role,
                        attributes: ["name"],
                    }
                ]
            },
            {
                model: Product_review,
            },
        ],
        transaction: t
    });
    return pro ? { ...pro, images: JSON.parse(`${pro.toJSON().images}`) } : false;
};
export const UpdateProductById = async (data, productId, t) => {
    const dataPro = _.omit(data, ["categoryId"]);
    const update = await Products.update(dataPro, { where: { id: productId }, transaction: t });
    if (!!update[0]) {
        return true;
    }
    else {
        return false;
    }
};
export const DeleteProductById = async (productId, t) => {
    const remove = await Products.destroy({ where: { id: productId }, transaction: t });
    return remove ? true : false;
};
export const GetProductsByIds = async (ids) => {
    const products = await Products.findAll({ where: { id: { [Op.in]: ids } } });
    return products;
};
//# sourceMappingURL=productsDel.js.map