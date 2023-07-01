import { v4 as uuidv4 } from "uuid";
import { validationResult } from "express-validator";
import messageResponse from "../util/messageResponse.json" assert { type: "json" };
import { response } from "../helper/customResponse.js";
import * as productsService from "../service/productsService.js";
import { RemoveImage } from "../helper/removeImage.js";
import { getPagination } from "../dal/dataSort/pagination.js";
export const createProduct = async (req, res) => {
    const sku = uuidv4();
    const type = uuidv4();
    req.body.sku = sku;
    req.body.type = type;
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.products[401],
            code: 401,
            data: error.array(),
        });
        if (req.body.images) {
            RemoveImage(JSON.parse(`${req.body.images}`));
        }
        return;
    }
    const product = await productsService.CreateProduct(req.body);
    if (product) {
        response({
            res,
            message: messageResponse.products[201],
            code: 201,
            data: req.body.title,
        });
    }
};
export const insertProductOnCategory = async (req, res) => {
    const categoryId = Number(req.query.categoryId);
    const productId = Number(req.query.productId);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.products[401],
            code: 401,
            data: error.array(),
        });
        return;
    }
    const newpro = await productsService.InsertProductOnCategory(categoryId, productId);
    if (newpro) {
        response({
            res,
            message: messageResponse.products[200],
            code: 200,
            data: newpro,
        });
    }
};
export const getProductById = async (req, res) => {
    const productId = Number(req.params.productId);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.products[401],
            code: 401,
            data: error.array(),
        });
        return;
    }
    const newpro = await productsService.GetProductById(productId);
    if (typeof newpro !== "boolean" && newpro) {
        response({
            res,
            message: messageResponse.products[200],
            code: 200,
            data: newpro,
        });
    }
    else {
        response({
            res,
            message: messageResponse.products[500],
            code: 500,
        });
    }
};
export const getProductsByTitle = async (req, res) => {
    const title = req.query.title ? req.query.title : undefined;
    const size = req.query.size ? Number(req.query.size) : 1;
    const page = req.query.page ? Number(req.query.page) : 0;
    const { limit, offset } = getPagination(page, size);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.products[401],
            code: 401,
            data: error.array(),
        });
        return;
    }
    const products = await productsService.GetProductsByTitle(title, offset, limit);
    if (typeof products !== "boolean") {
        response({
            res,
            message: messageResponse.products[200],
            code: 200,
            data: products.data,
            count: products.count,
            totalPages: products.totalPages,
            currentPage: products.currentPage,
            nextPage: products.nextPage,
            previousPage: products.previousPage,
        });
    }
    else {
        response({
            res,
            message: messageResponse.products[500],
            code: 500,
        });
    }
};
export const UpdateProductOnCategory = async (req, res) => {
    const productId = Number(req.params.productId);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.products[401],
            code: 401,
            data: error.array(),
        });
        if (req.body.images) {
            RemoveImage(JSON.parse(`${req.body.images}`));
        }
        return;
    }
    const newpro = await productsService.UpdateProductOnCategory(req.body, productId);
    if (newpro) {
        response({
            res,
            message: messageResponse.products[200],
            code: 200,
            data: newpro,
        });
    }
};
export const UpdateProductById = async (req, res) => {
    const productId = Number(req.params.productId);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.products[401],
            code: 401,
            data: error.array(),
        });
        if (req.body.images) {
            RemoveImage(JSON.parse(`${req.body.images}`));
        }
        return;
    }
    const newpro = await productsService.UpdateProductById(req.body, productId);
    if (newpro) {
        response({
            res,
            message: messageResponse.products[200],
            code: 200,
            data: newpro,
        });
    }
};
export const DeleteProductById = async (req, res) => {
    const productId = Number(req.params.productId);
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.products[401],
            code: 401,
            data: error.array(),
        });
        return;
    }
    const newpro = await productsService.DeleteProductById(productId);
    if (newpro) {
        response({
            res,
            message: messageResponse.products[200],
            code: 200,
            data: newpro,
        });
    }
};
//# sourceMappingURL=productController.js.map