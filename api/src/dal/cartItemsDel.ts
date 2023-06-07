import { Op, Transaction } from "sequelize"
import { CartItemsInput } from "../models/bo/CartItems.js"
import { CartItems } from "../models/index.js"
import { conditionGetAllCartItems, FindAllItemsParams } from "./dataSort/helperCartItems.js"

//create
export const createCartItems=async(data:CartItemsInput[],cartId:number,t:Transaction):Promise<boolean>=>{
    const create=await CartItems.bulkCreate(
         data.map(item => ({ ...item, cartId:cartId}))
        ,{transaction:t}
        )
    return create.length>0?true:false
}
//AddItemsInCart
export const AddItemsInCartByCartId=async(data:CartItemsInput,cartId:number,t:Transaction):Promise<boolean>=>{
 const add=await CartItems.create({...data,cartId:cartId},{transaction:t})
 return add?true:false
}

//RemoveCartItemsByCartIdAndProductID
export const RemoveCartItemsByCartIdAndProductID=async(cartId:number,productId:number,t:Transaction):Promise<boolean>=>{
    const add=await CartItems.destroy({where:{[Op.and]:[{cartId},{productId}]},transaction:t})
    return !!add?true:false
}

//updateQuantity
export const updateQuantityByCartIdAndProductId=async(quantity:number,cartId:number,productId:number,t:Transaction):Promise<boolean>=>{
    const add=await CartItems.update({quantity},{where:{[Op.and]:[{cartId},{productId}]},transaction:t})
    return !!add[0]?true:false
}

//RemoveAllItems
export const RemoveAllItems=async(cartId:number,t:Transaction):Promise<boolean>=>{
    const RemoveAll=await CartItems.destroy({where:{cartId},transaction:t})
    return !!RemoveAll?true:false
}

//FindAllItems
export const FindAllItems=async(data:FindAllItemsParams)=>{
    const items=await CartItems.findAll({where:conditionGetAllCartItems(data.token,data.cartId,),transaction:data.t})
    return !!items?.length?items:false
}