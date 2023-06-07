import { Transaction } from "sequelize";
import { Product_review } from "../models/index.js"

interface Update{
    title:string
    content:string
    rating:number
}

//CreateProductReview
export const CreateProductReview=async(data:any,productId:number,t:Transaction)=>{
    const create=await Product_review.create({...data,productId},{transaction:t})
    return create?true:false;
}
//UpdateProductReview
export const UpdateProductReview=async(data:Update,productId:number,t?:Transaction)=>{
    const update=await Product_review.update(data,{where:{productId},transaction:t?t:null})
    return !!update[0]?true:false;
}
//DeleteProductReview
export const DeleteProductReview=async(productId:number)=>{
    const remove=await Product_review.destroy({where:{productId}})
    return !!remove?true:false;
}