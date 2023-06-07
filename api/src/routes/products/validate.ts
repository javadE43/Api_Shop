


import {body,param,query}from "express-validator";
import { Op } from "sequelize";
import { Categorys, Products, User } from "../../models/index.js";

export const validate=new(class Validate{


    create(){
        return[
            body("userId")
            .notEmpty()
            .withMessage('not empty userId')
            .custom(async(userId:string)=>{
                const id=Number(userId)
              if(Number.isInteger(id)){
                const user=await User.findByPk(id)
                return user?true:Promise.reject("there is not user By userId")
              }else{
                return Promise.reject("invalid userId")
              }
            }),
            body("categoryId")
            .custom(async(categoryId:string)=>{
                if(!categoryId){
                      return true
                }else{
                    const id=Number(categoryId)
                    if(Number.isInteger(id)){
                      const cat=await Categorys.findByPk(id)
                      return cat?true:Promise.reject("there is not user By categoryId")
                    }else{
                      return Promise.reject("invalid categoryId")
                    }
                }
            }),
            body("title")
            .notEmpty()
            .isLength({min:1,max:255})
            .withMessage("not empty title product")
            .custom(async(title:string)=>{
               const dublicateTitleProduct=await Products.findOne({where:{title:title}})
               return dublicateTitleProduct?Promise.reject("already title Product"):true
            }),
            
            body("metatitle")
            .isLength({max:255})
            .withMessage("isLength metatitle 255 char"),    
            
            body("summary")
            .isLength({max:255})
            .withMessage("isLength summary 255 char"),    
            


            body("price")
            .custom((price:string)=>{
                const float=Number.parseFloat(price)
                console.log(float)
                if(!price && !float){
                    return true
                }else{
                    return float?true:Promise.reject("invalid Price")
                }
            }),


            body("discount")
            .custom((discount:string)=>{
                const integer=Number(discount)
                console.log(integer)
                console.log(Number.isInteger(integer))
                if(!discount){
                    return true
                }else{
                    return Number.isInteger(integer)?true:Promise.reject("invalid Discount")
                }
            }),
            

            body("quantity")
            .custom((quantity:string)=>{
                const integer=Number(quantity)
                console.log(integer)
                console.log(Number.isInteger(integer))
                if(!quantity){
                    return true
                }else{
                    return Number.isInteger(integer)?true:Promise.reject("invalid Discount")
                }
            }),

            body("shop")
            .custom((shop:string)=>{
                const integer=Number(shop)
                console.log(integer)
                console.log(Number.isInteger(integer))
                if(!shop){
                    return true
                }else{
                    return Number.isInteger(integer)?true:Promise.reject("invalid Discount")
                }
            }),
            body("images"),

            body("slug"),
        ]
    }
    update(){
        return[
            param("productId")
            .notEmpty()
            .withMessage('not empty productId')
            .custom(async(productId:string)=>{
                const id=Number(productId)
              if(Number.isInteger(id)){
                const pro=await Products.findByPk(id)
                return pro?true:Promise.reject("there is not productId")
              }else{
                return Promise.reject("invalid productId")
              }
            }),
            body("categoryId")
            .custom(async(categoryId:string)=>{
                if(!categoryId){
                      return true
                }else{
                    const id=Number(categoryId)
                    if(Number.isInteger(id)){
                      const cat=await Categorys.findByPk(id)
                      return cat?true:Promise.reject("there is not user By categoryId")
                    }else{
                      return Promise.reject("invalid categoryId")
                    }
                }
            }),
            body("title")
            .isLength({max:255})
            .custom(async(title:string)=>{
                if(!title){
                    return true
                }else{
                    const dublicateTitleProduct=await Products.findOne({where:{title:title}})
                    return dublicateTitleProduct?Promise.reject("already title Product"):true
                }
            }),
            
            body("metatitle")
            .isLength({max:255})
            .withMessage("isLength metatitle 255 char"),    
            
            body("summary")
            .isLength({max:255})
            .withMessage("isLength summary 255 char"),    
            

            body("price")
            .custom((price:string)=>{
                const float=Number.parseFloat(price)
                console.log(float)
                if(!price && !float){
                    return true
                }else{
                    return float?true:Promise.reject("invalid Price")
                }
            }),


            body("discount")
            .custom((discount:string)=>{
                const integer=Number(discount)
                console.log(integer)
                console.log(Number.isInteger(integer))
                if(!discount){
                    return true
                }else{
                    return Number.isInteger(integer)?true:Promise.reject("invalid Discount")
                }
            }),
            

            body("quantity")
            .custom((quantity:string)=>{
                const integer=Number(quantity)
                console.log(integer)
                console.log(Number.isInteger(integer))
                if(!quantity){
                    return true
                }else{
                    return Number.isInteger(integer)?true:Promise.reject("invalid Discount")
                }
            }),

            body("shop")
            .custom((shop:string)=>{
                const integer=Number(shop)
                console.log(integer)
                console.log(Number.isInteger(integer))
                if(!shop){
                    return true
                }else{
                    return Number.isInteger(integer)?true:Promise.reject("invalid Discount")
                }
            }),
            body("images"),

            body("slug"),
        ]
    }
    validateParamProductId(){
      return[
        param("productId")
        .notEmpty()
        .withMessage('not empty productId')
        .custom(async(productId:string)=>{
            const id=Number(productId)
          if(Number.isInteger(id)){
            const pro=await Products.findByPk(id)
            return pro?true:Promise.reject("there is By productId")
          }else{
            return Promise.reject("invalid productId")
          }
        }),
      ]
    }
    validateQueryProductId(){
      return[
        query("productId")
        .notEmpty()
        .withMessage('not empty productId')
        .custom(async(productId:string)=>{
            const id=Number(productId)
          if(Number.isInteger(id)){
            const pro=await Products.findByPk(id)
            return pro?true:Promise.reject("there is not productId")
          }else{
            return Promise.reject("invalid productId")
          }
        }),
      ]
    }
    validateQueryProductIdAndCategoryId(){
      return[
        query("productId")
        .notEmpty()
        .withMessage('not empty productId')
        .custom(async(productId:string)=>{
            const id=Number(productId)
          if(Number.isInteger(id)){
            const pro=await Products.findByPk(id)
            return pro?true:Promise.reject("there is not productId")
          }else{
            return Promise.reject("invalid productId")
          }
        }),
        query("categoryId")
        .notEmpty()
        .withMessage('not empty categoryId')
        .custom(async(categoryId:string)=>{
            const id=Number(categoryId)
          if(Number.isInteger(id)){
            const cat=await Categorys.findByPk(id)
            return cat?true:Promise.reject("there is not categoryId")
          }else{
            return Promise.reject("invalid categoryId")
          }
        }),
      ]
    }
    validateQuerySearchProduct(){
      return[
        query("title")
        .custom(async(title:string)=>{
          if(title){
            const pro=await Products.findOne({where:{title:{[Op.substring]:title}}})
            return pro?true:Promise.reject("there is not title By productId")
          }else{
            return true
          }
        }),
      ]
    }

})()