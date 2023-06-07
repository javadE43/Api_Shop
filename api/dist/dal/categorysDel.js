import Categorys from "../models/bo/Category.js";
import Products from "../models/bo/Product.js";
export const createNewCategory = async (data) => {
    const create = await Categorys.create(data);
    if (!create) {
        return false;
    }
    return create;
};
export const GetByTilte = async (title) => {
    const category = await Categorys.findAll({
        attributes: ["id", "title", "metatitle"],
        where: { title: title },
        include: [
            {
                model: Products,
                attributes: [
                    "id",
                    "title",
                    "price",
                    "quantity",
                    "discount",
                    "sku",
                    "shop",
                    "type",
                    "summery",
                    "metatitle",
                    "slug",
                    "content",
                ],
                through: { attributes: [] },
            },
        ],
    });
    return category;
};
//# sourceMappingURL=categorysDel.js.map