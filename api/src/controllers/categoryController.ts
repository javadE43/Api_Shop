import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { getPagination } from "../dal/dataSort/pagination.js";
//
import { response } from "../helper/customResponse.js";
import { RemoveImage } from "../helper/removeImage.js";
import { GetByTilteInterface } from "../models/bo/Category.js";
import * as categorysService from "../service/categoryService.js";
import messageResponse from "../util/messageResponse.json" assert { type: "json" };

//CreateNewCategory
export const CreateNewCategory = async (req: Request, res: Response) => {
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
  const NewCategory: boolean = await categorysService.createNewCategory(req.body);
  if (NewCategory) {
    response({
      res,
      message: messageResponse.category[201],
      code: 201,
      data: NewCategory,
    });
  }
};
//UpdateByIdCategory
export const UpdateByIdCategory = async (req: Request, res: Response) => {
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
//GetByIdCategory
export const GetByIdCategory = async (req: Request, res: Response) => {
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
  const category: boolean | GetByTilteInterface = await categorysService.GetByIdCategory(categoryId);
  if (typeof category === "boolean") {
    response({
      res,
      message: messageResponse.category[403],
      code: 403,
    });
  } else {
    response({
      res,
      message: messageResponse.category[200],
      code: 200,
      data: category,
    });
  }
};
//GetByTilteCategory
export const GetByTilteCategory = async (req: Request, res: Response) => {
  const title = req.query.title as string;
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
  const categorys: boolean | GetByTilteInterface[] = await categorysService.GetByTilteCategory(title);
  if (typeof categorys === "boolean") {
    response({
      res,
      message: messageResponse.category[403],
      code: 403,
    });
  } else {
    response({
      res,
      message: messageResponse.category[200],
      code: 200,
      data: categorys,
    });
  }
};
//GetALLCategorys
export const GetALLCategorys = async (req: Request, res: Response) => {
  const title = req.query.title as string;
  const content = req.query.content as string;
  const size = req.query.size ? Number(req.query.size) : 1;
  const page = req.query.page ? Number(req.query.page) : 0;

  //Limit and Offset
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
  } else {
    response({
      res,
      message: messageResponse.category[403],
      code: 403,
    });
  }
};
//DeleteByIdCategory
export const DeleteByIdCategory = async (req: Request, res: Response) => {
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
  } else {
    response({
      res,
      message: messageResponse.category[201],
      code: 201,
      data: category,
    });
  }
};
