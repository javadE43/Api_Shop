import * as productReviewService from "../service/product_reviewService.js";
import { response } from "../helper/customResponse.js";
import messageResponse from "../util/messageResponse.json" assert { type: "json" };
export const UpdateProductReview = async (req, res) => {
    const id = Number(req.params.productId);
    const review = await productReviewService.UpdateProductReview(req.body, id);
    if (review) {
        response({
            res,
            message: messageResponse.products[201],
            code: 201,
            data: req.review.title,
        });
    }
};
//# sourceMappingURL=product_reviewController.js.map