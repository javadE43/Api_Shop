import {body,param,query} from "express-validator"
import { Categorys } from "../../models/index.js"


export const validate=new(class Validate{

    create(){
        return[
          body('title')
          .notEmpty()
          .withMessage("not empty title category")
          .isLength({min:1,max:255})
          .withMessage("{min:1,max:255")
          .custom(async(title:string)=>{
            if(!title){
                  return Promise.reject("not empty title")
            }else{
              const cat=await Categorys.findOne({where:{title:title}})
              return cat?Promise.reject("already title category"):true
            }
          }),
          body("metatitle")
          .isLength({max:255})
          .withMessage("{min:1,max:255"),
          body("slug")
          .isLength({max:255})
          .withMessage("{min:1,max:255"),
          body("content")
          .isLength({max:255})
          .withMessage("{min:1,max:255"),
          body("image")
        ]
    }
    update(){
        return[
          param("categoryId")
          .notEmpty()
          .withMessage("not empty categoryId")
          .custom(async(categoryId:number)=>{
             const id=Number(categoryId)
             if(!Number.isInteger(id)){
               return Promise.reject("ONLY number categoryId")
             }else{
                const cat=await Categorys.findByPk(id);
                return cat?true:Promise.reject("category not categoryId")
             }    
          }),
          body('title')
          .isLength({max:255})
          .withMessage("{max:255")
          .custom(async(title:string)=>{
            if(!title){
                return true
            }else{
              const cat=await Categorys.findOne({where:{title:title}})
             return cat?Promise.reject("already title category"):true
            }
          }),
          body("metatitle")
          .isLength({min:0,max:255})
          .withMessage("{min:1,max:255"),
          body("slug")
          .isLength({min:0,max:255})
          .withMessage("{min:1,max:255"),
          body("content")
          .isLength({min:0,max:255})
          .withMessage("{min:1,max:255"),
          body("image")
          .isLength({min:0,max:255})
          .withMessage("{min:1,max:255"),
        ]
    }
    delete(){
        return[
          param("categoryId")
          .notEmpty()
          .withMessage("not empty categoryId")
          .custom(async(categoryId:number)=>{
             const id=Number(categoryId)
             if(!Number.isInteger(id)){
               return Promise.reject("ONLY number categoryId")
             }else{
                const cat=await Categorys.findByPk(id);
                return cat?true:Promise.reject("category not categoryId")
             }    
          }),
        ]
    }
    getById(){
        return[
          param("categoryId")
          .notEmpty()
          .withMessage("not empty categoryId")
          .custom(async(categoryId:number)=>{
             const id=Number(categoryId)
             if(!Number.isInteger(id)){
               return Promise.reject("ONLY number categoryId")
             }else{
                const cat=await Categorys.findByPk(id);
                return cat?true:Promise.reject("category not categoryId")
             }    
          }),
        ]
    }

    GetALLCategorys(){
      return[
          query("title"),
          query("content"),

      ]
    }

})()