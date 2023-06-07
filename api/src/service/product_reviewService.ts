import { Transaction } from "sequelize"
import * as productReview from "../dal/product_reviewDel.js"

//CreateProductReview
export const CreateProductReview=async(data:any,productId:number,t:Transaction):Promise<boolean>=>{
    const create:boolean= await productReview.CreateProductReview(data,productId,t)
    return create
}
//UpdateProductReview
export const UpdateProductReview=(data:any,productId:number,t?:Transaction)=>{
    const update= productReview.UpdateProductReview(data,productId,t)
    return update
}
//DeleteProductReview
export const DeleteProductReview=(productId:number)=>{
    const remove= productReview.DeleteProductReview(productId)
    return remove
}