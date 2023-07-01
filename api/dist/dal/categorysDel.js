import { Op } from "sequelize";
import Categorys from "../models/bo/Category.js";
import Products from "../models/bo/Product.js";
import Product_category from "../models/bo/product_category.js";
import { Product_review } from "../models/index.js";
import { conditionGetAllCategory } from "./dataSort/helperCategoryDel.js";
import { paginationData } from "./dataSort/pagination.js";
export const createNewCategory = async (data, t) => {
    const create = await Categorys.create({ ...data }, { transaction: t });
    return create ? true : false;
};
export const UpdateById = async (data, categoryId, t) => {
    const update = await Categorys.update({ ...data }, { where: { id: categoryId }, transaction: t });
    return !!update[0] ? true : false;
};
export const DeleteById = async (categoryId, t) => {
    const cate = await Product_category.findAll({ where: { categoryId }, transaction: t });
    const remove = await Categorys.destroy({ where: { id: categoryId } });
    if (cate?.length > 0 && !!remove) {
        const removeTableJoin = await Product_category.destroy({ where: { categoryId }, transaction: t });
        return !!removeTableJoin ? true : false;
    }
    return !!remove ? true : false;
};
export const GetById = async (categoryId, t) => {
    const category = await Categorys.findByPk(categoryId, { include: [{ model: Products, through: { attributes: [] }, include: [{ model: Product_review }] }], transaction: t ? t : null });
    return category ? category : false;
};
export const GetALLCategorys = async (categoryName, content, limit, offset) => {
    const category = await Categorys.findAll({ where: conditionGetAllCategory(categoryName, content, Op),
        include: [{ model: Products, through: { attributes: [] }, include: [{ model: Product_review }] }], offset, limit });
    if (!!category?.length === false) {
        return false;
    }
    else {
        const cat = category.map((item, index) => {
            item.products[index].images = JSON.parse(`${item.products[index].images}`);
            return item;
        });
        const count = await Categorys.count();
        return paginationData(cat, count, limit, offset);
    }
};
export const GetByTilte = async (title) => {
    const categorys = await Categorys.findAll({
        attributes: ["id", "title", "metatitle", "slug", "content", "image"],
        where: { title: { [Op.substring]: title } },
        include: [
            {
                model: Products,
                through: { attributes: [] },
                include: [
                    {
                        model: Product_review
                    },
                ]
            },
        ],
    });
    const cat = categorys.map((item, index) => {
        item.products[index].images = JSON.parse(`${item.products[index].images}`);
        return item;
    });
    return cat;
};
//# sourceMappingURL=categorysDel.js.map