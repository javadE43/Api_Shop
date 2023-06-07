import { Transaction } from "sequelize";
import * as cartItemsDel from "../dal/cartItemsDel.js";
import { FindAllItemsParams } from "../dal/dataSort/helperCartItems.js";
import { CartItemsInput } from "../models/bo/CartItems.js";


export const CreateCartItems=async(data:CartItemsInput[],cartId:number,t:Transaction):Promise<boolean>=>{
    const create:boolean=await cartItemsDel.createCartItems(data,cartId,t)
    return create?true:false
}

//AddItemsInCartByCartId
export const AddItemsInCartByCartId=async(data:CartItemsInput,cartId:number,t:Transaction):Promise<boolean>=>{
    const create:boolean=await cartItemsDel.AddItemsInCartByCartId(data,cartId,t)
    return create?true:false
}

//updateQuantityByCartIdAndProductId
export const updateQuantityByCartIdAndProductId=async(quantity:number,cartId:number,productId:number,t:Transaction):Promise<boolean>=>{
    const create:boolean=await cartItemsDel.updateQuantityByCartIdAndProductId(quantity,cartId,productId,t)
    return create?true:false
}

//RemoveCartItemsByCartIdAndProductID
export const RemoveCartItemsByCartIdAndProductID=async(cartId:number,productId:number,t:Transaction):Promise<boolean>=>{
    const create:boolean=await cartItemsDel.RemoveCartItemsByCartIdAndProductID(cartId,productId,t)
    return create?true:false

}

//RemoveAllItems
export const RemoveAllItems=async(cartId:number,t:Transaction):Promise<boolean>=>{
    const create:boolean=await cartItemsDel.RemoveAllItems(cartId,t)
    return create?true:false

}


//FindAllItems
export const FindAllItems=async(data:FindAllItemsParams)=>{
    const items=await cartItemsDel.FindAllItems(data)
    return items
}