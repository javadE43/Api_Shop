import { Request, Response } from "express";
import * as productReviewService from "../service/product_reviewService.js";
import { response } from "../helper/customResponse.js";
import messageResponse from "../util/messageResponse.json" assert{type:"json"}
// import * as productService from "../service/productsService.js";

//UpdateProductReview
export const UpdateProductReview = async (req:Request,res:Response) => {
  const id:number=Number(req.params.productId)
  const review = await productReviewService.UpdateProductReview(req.body,id);
  if (review) {
    response({
      res,
      message: messageResponse.products[201],
      code: 201,
      data: req.review.title,
    });
  } 
};
