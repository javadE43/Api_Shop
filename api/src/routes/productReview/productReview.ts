import { Router } from "express";
import * as controller from "../../controllers/product_reviewController.js";
import { validate } from "./validate.js";

const routerReview=Router()
routerReview.put("/",validate.update(),controller.UpdateProductReview)

export default routerReview