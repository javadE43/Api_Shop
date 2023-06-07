import { Op, Transaction } from "sequelize";
import  Categorys, { CategoryInput, GetByTilteInterface, UpdateDataParams }  from "../models/bo/Category.js";
import  Products  from "../models/bo/Product.js";
import Product_category from "../models/bo/product_category.js";
import { Product_review } from "../models/index.js";
import { conditionGetAllCategory } from "./dataSort/helperCategoryDel.js";
import { PaginationData, paginationData } from "./dataSort/pagination.js";

//Create
export const createNewCategory = async (data: CategoryInput,t:Transaction):Promise<boolean> => {
  const create = await Categorys.create({...data},{transaction:t});
  return create?true:false
};

//UpdateById
export const UpdateById=async(data:UpdateDataParams,categoryId:number,t:Transaction):Promise<boolean>=>{
  const update=await Categorys.update({...data},{where:{id:categoryId},transaction:t})
  return !!update[0]?true:false
}
//DeleteById
export const DeleteById=async(categoryId:number,t:Transaction):Promise<boolean>=>{
  const cate=await Product_category.findAll({where:{categoryId},transaction:t})
  const remove=await Categorys.destroy({where:{id:categoryId}})
  if(cate?.length>0 && !!remove){
    const removeTableJoin=await Product_category.destroy({where:{categoryId},transaction:t})
    return !!removeTableJoin?true:false
  }
  return !!remove?true:false
}
//GetById
export const GetById=async(categoryId:number,t?:Transaction):Promise<GetByTilteInterface|boolean>=>{
  const category=await Categorys.findByPk(categoryId,{include:[{model:Products,through:{attributes:[]},include:[{model:Product_review}]}],transaction:t?t:null})
  return category?category:false
}
//GetALLCategorys
export const GetALLCategorys=async(categoryName:string,content:string,limit:number,offset:number):Promise<PaginationData|boolean>=>{
  const category=await Categorys.findAll({where:conditionGetAllCategory(categoryName,content,Op),
  include:[{model:Products,through:{attributes:[]},include:[{model:Product_review}]}],offset,limit})
  if(!!category?.length===false){
    return false
  }else{
    const cat:GetByTilteInterface[]=category.map((item,index)=>{
      item.products[index].images=JSON.parse(`${item.products[index].images}`)
     return item
    })
    const count=await Categorys.count()
    return paginationData(cat,count,limit,offset)
  }
}

//GetByTitle
export const GetByTilte = async (title: string):Promise<GetByTilteInterface[]>=> {
  const categorys = await Categorys.findAll({
    attributes: ["id", "title", "metatitle","slug","content","image"],
    where: { title:{[Op.substring]:title }},
    include: [
      {
        model: Products,
        through: { attributes: [] },
        include:[
          {
            model:Product_review
          },
        ]
      },
    ],
  });
  const cat:GetByTilteInterface[]=categorys.map((item,index)=>{
    item.products[index].images=JSON.parse(`${item.products[index].images}`)
   return item
  })
  return cat;
};
