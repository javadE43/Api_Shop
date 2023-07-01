import { validationResult } from "express-validator";
import { getPagination } from "../dal/dataSort/pagination.js";
import { response } from "../helper/customResponse.js";
import { RemoveImage } from "../helper/removeImage.js";
import * as categorysService from "../service/categoryService.js";
import messageResponse from "../util/messageResponse.json" assert { type: "json" };
export const CreateNewCategory = async (req, res) => {
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.category[400],
            code: 400,
            data: error.array(),
        });
        RemoveImage(req.body.image);
        return;
    }
    const NewCategory = await categorysService.createNewCategory(req.body);
    if (NewCategory) {
        response({
            res,
            message: messageResponse.category[201],
            code: 201,
            data: NewCategory,
        });
    }
};
export const UpdateByIdCategory = async (req, res) => {
    const categoryId = Number(req.params.categoryId);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.category[400],
            code: 400,
            data: error.array(),
        });
        RemoveImage(req.body.image);
        return;
    }
    const update = await categorysService.UpdateByIdCategory(req.body, categoryId);
    if (update) {
        response({
            res,
            message: messageResponse.category[200],
            code: 200,
            data: update,
        });
    }
};
export const GetByIdCategory = async (req, res) => {
    const categoryId = Number(req.params.categoryId);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.category[400],
            code: 400,
            data: error.array(),
        });
        return;
    }
    const category = await categorysService.GetByIdCategory(categoryId);
    if (typeof category === "boolean") {
        response({
            res,
            message: messageResponse.category[403],
            code: 403,
        });
    }
    else {
        response({
            res,
            message: messageResponse.category[200],
            code: 200,
            data: category,
        });
    }
};
export const GetByTilteCategory = async (req, res) => {
    const title = req.query.title;
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.category[400],
            code: 400,
            data: error.array(),
        });
        return;
    }
    const categorys = await categorysService.GetByTilteCategory(title);
    if (typeof categorys === "boolean") {
        response({
            res,
            message: messageResponse.category[403],
            code: 403,
        });
    }
    else {
        response({
            res,
            message: messageResponse.category[200],
            code: 200,
            data: categorys,
        });
    }
};
export const GetALLCategorys = async (req, res) => {
    const title = req.query.title;
    const content = req.query.content;
    const size = req.query.size ? Number(req.query.size) : 1;
    const page = req.query.page ? Number(req.query.page) : 0;
    const { limit, offset } = getPagination(page, size);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.category[400],
            code: 400,
            data: error.array(),
        });
        return;
    }
    const categorys = await categorysService.GetALLCategorys(title, content, limit, offset);
    if (typeof categorys !== "boolean") {
        response({
            res,
            code: 200,
            data: categorys.data,
            count: categorys.count,
            totalPages: categorys.totalPages,
            currentPage: categorys.currentPage,
            nextPage: categorys.nextPage,
            previousPage: categorys.previousPage,
            message: messageResponse.category[200],
        });
    }
    else {
        response({
            res,
            message: messageResponse.category[403],
            code: 403,
        });
    }
};
export const DeleteByIdCategory = async (req, res) => {
    const categoryId = Number(req.params.categoryId);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.category[400],
            code: 400,
            data: error.array(),
        });
        return;
    }
    const category = await categorysService.DeleteByIdCategory(categoryId);
    if (category === false) {
        response({
            res,
            message: messageResponse.category[401],
            code: 401,
        });
    }
    else {
        response({
            res,
            message: messageResponse.category[201],
            code: 201,
            data: category,
        });
    }
};
//# sourceMappingURL=categoryController.js.map