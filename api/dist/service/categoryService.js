import * as categorysdel from "../dal/categorysDel.js";
import { RemoveImage } from "../helper/removeImage.js";
import { sequelize } from "../models/sequelize.js";
export const createNewCategory = async (data) => {
    const result = await sequelize.transaction(async (t) => {
        const cat = await categorysdel.createNewCategory(data, t);
        if (cat === false) {
            if (data.image) {
                RemoveImage(data.image);
            }
            throw new Error("Request Filed");
        }
        return true;
    });
    return result;
};
export const UpdateByIdCategory = async (data, id) => {
    const result = await sequelize.transaction(async (t) => {
        const cat = await categorysdel.GetById(id, t);
        const update = await categorysdel.UpdateById(data, id, t);
        if (update === false || typeof cat === "boolean") {
            if (data.image) {
                RemoveImage(data.image);
            }
            throw new Error("Request Filed");
        }
        if (cat.image) {
            RemoveImage(cat.image);
        }
        return true;
    });
    return result;
};
export const DeleteByIdCategory = async (id) => {
    const result = await sequelize.transaction(async (t) => {
        const category = await categorysdel.GetById(id, t);
        const remove = await categorysdel.DeleteById(id, t);
        if (remove === false || typeof category === "boolean") {
            throw new Error("Request Filed");
        }
        if (category.image) {
            RemoveImage(category.image);
        }
        return true;
    });
    return result;
};
export const GetByTilteCategory = (title) => {
    return categorysdel.GetByTilte(title);
};
export const GetByIdCategory = (id) => {
    return categorysdel.GetById(id);
};
export const GetALLCategorys = (title, content, limit, offset) => {
    return categorysdel.GetALLCategorys(title, content, limit, offset);
};
//# sourceMappingURL=categoryService.js.map