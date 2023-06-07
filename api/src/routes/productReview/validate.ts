import {param,query}from "express-validator"
import { Products } from "../../models/index.js"


export const validate =new(class ValidateProductReview{
    update(){
        return[
            param("productId")
            .notEmpty()
            .withMessage("productId not empty")
             .custom(async(productId)=>{
                const id=Number(productId)
                if(Number.isInteger(id)){
                    const pro=await Products.findByPk(id)
                    if(!pro){
                        return Promise.reject("there is not product By productId")
                    }else{
                        return true
                    }
                }else{
                    return Promise.reject(" only integer productId")
                }
             })
            .toInt(),
            query("rating")
            .notEmpty()
            .withMessage("rating not empty")
            .custom(async(rating)=>{
                const id=Number(rating)
                if(Number.isInteger(id)){
                   return true
                    
                }else{
                    return Promise.reject(" only integer rating")
                }
             })
            .toInt(),
        ]
    }


})()