import { response } from "../helper/customResponse.js";
import * as productsService from "../service/productsService.js";
export const createProduct = async (req, res) => {
    console.log(req.body);
    try {
        const newpro = await productsService.CreateProduct(req.body);
        response({
            res,
            message: " ",
            code: 201,
            data: newpro,
        });
    }
    catch (error) {
        response({
            res,
            message: " ",
            code: 500,
            data: error,
        });
    }
};
export const insertProductOnCategory = async (req, res) => {
    const categoryId = Number(req.query.categoryId);
    const productId = Number(req.query.productId);
    try {
        const newpro = await productsService.InsertProductOnCategory(categoryId, productId);
        response({
            res,
            message: " ",
            code: 200,
            data: newpro,
        });
    }
    catch (error) {
        response({
            res,
            message: " ",
            code: 500,
            data: error,
        });
    }
};
export const getProductById = async (req, res) => {
    const productId = Number(req.params.productId);
    try {
        const newpro = await productsService.GetProductById(productId);
        response({
            res,
            message: " ",
            code: 200,
            data: newpro,
        });
    }
    catch (error) {
        response({
            res,
            message: " ",
            code: 500,
            data: error,
        });
    }
};
export const getProductsByTitle = async (req, res) => {
    const title = req.query.title;
    const newpro = await productsService.GetProductsByTitle(title);
    if (newpro !== false) {
        response({
            res,
            message: " ",
            code: 200,
            data: newpro,
        });
    }
    else {
        response({
            res,
            message: " ",
            code: 500,
        });
    }
};
export const UpdateProductOnCategory = async (req, res) => {
    const productId = Number(req.params.productId);
    try {
        const newpro = await productsService.UpdateProductOnCategory(req.body, productId);
        response({
            res,
            message: " ",
            code: 200,
            data: newpro,
        });
    }
    catch (error) {
        response({
            res,
            message: " ",
            code: 500,
            data: error,
        });
    }
};
//# sourceMappingURL=productController.js.map