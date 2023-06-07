import * as categorysdel from "../dal/categorysDel.js";
export const createNewCategory = (data) => {
    return categorysdel.createNewCategory(data);
};
export const GetByTilte = (title) => {
    return categorysdel.GetByTilte(title);
};
//# sourceMappingURL=categoryService.js.map