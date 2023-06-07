import { response } from "../helper/customResponse.js";
import * as categorysService from "../service/categoryService.js";
export const CreateNewCategory = async (req, res) => {
    try {
        const create = await categorysService.createNewCategory(req.body);
        response({
            res,
            message: "ok",
            code: 200,
            data: create,
        });
    }
    catch (error) {
        response({
            res,
            message: "error",
            code: 500,
            data: error,
        });
    }
};
export const GetByTilte = async (req, res) => {
    const title = req.query.title;
    const categorys = await categorysService.GetByTilte(title);
    if (!categorys) {
        response({
            res,
            message: "error",
            code: 500,
        });
        return;
    }
    response({
        res,
        message: "ok",
        code: 200,
        data: categorys,
    });
};
//# sourceMappingURL=categoryController.js.map