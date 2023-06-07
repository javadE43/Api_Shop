import * as cartDel from "../dal/cartDel.js";
import { v4 as uuidv4 } from "uuid";
import { sequelize } from "../models/sequelize.js";
import { Transaction } from "sequelize";
import _ from "lodash";
import { CartInput, FindAttributesCart } from "../models/bo/Cart.js";
import { CartItemsInput } from "../models/bo/CartItems.js";
import * as cartItemsService from "./cartItemsService.js";
import { StatusCart } from "../util/statusCart.js";
import { PaginationData } from "../dal/dataSort/pagination.js";

export const CreateCart = async (dataCart: CartInput, dataCartItems: CartItemsInput[]):Promise<string> => {

  //token
  dataCart.token = uuidv4();
  dataCart.status =StatusCart.Registered
  //createCart
  const result:string = await sequelize.transaction(async (t: Transaction) => {
    const cartCreate: number = await cartDel.CreateCart(dataCart, t);
    if (!!cartCreate === false) {
      throw new Error("Request Filed");
    }
    const cartItemsCreate = await cartItemsService.CreateCartItems(dataCartItems,cartCreate, t);
    if (cartItemsCreate === false) {
      throw new Error("Request Filed");
    }
    return dataCart.token
  });
  return result;
};

//AddToCartItem
export const AddToCartItem=async(data:CartItemsInput,token:string):Promise<boolean>=>{
  const result=await sequelize.transaction(async(t:Transaction)=>{
    const cart:boolean | FindAttributesCart=await cartDel.GetCartByToken(token,t)
    if(typeof cart==="boolean"){
    throw new Error("Request Filed")
    }
    
    const items=await cartItemsService.AddItemsInCartByCartId(data,cart.id,t)
    if(items===false){
      throw new Error("Request Filed")
      }
      return true
  })
  return result
}

//GetCartByToken
export const GetCartByToken=async(token:string,t?:Transaction):Promise<boolean|FindAttributesCart>=>{
  const cart=await cartDel.GetCartByToken(token,t)
  if(cart ===false){
    return false
  }else{
    return cart
  }
}

//GetCartByUserId
export const GetCartByUserId=async(userId:number):Promise<boolean|FindAttributesCart>=>{
  const cart=await cartDel.GetCartByUserId(userId)
  if(cart ===false){
    return false
  }else{
    return cart
  }
}

//GetAllCart
export const GetAllCart=async(token: string|null, userId: number|null,cartId:number|null,offset:number,limit:number):Promise<boolean|PaginationData>=>{
  const cart=await cartDel.GetAllCart(token,userId,cartId,offset,limit)
  if(cart ===false){
    return false
  }else{
    return cart
  }
}


//UpdateQuantity
export const UpdateQuantity=async(quantity:number,token:string,productId:number):Promise<boolean>=>{
  const result=await sequelize.transaction(async(t:Transaction)=>{
    const cart:boolean | FindAttributesCart=await cartDel.GetCartByToken(token,t)
    if(typeof cart==="boolean"){
    throw new Error("Request Filed")
    }
    
    const items=await cartItemsService.updateQuantityByCartIdAndProductId(quantity,cart.id,productId,t)
    if(items===false){
      throw new Error("Request Filed")
      }
      return true
  })
  return result
}

//DeleteCartByToken
export const DeleteCartByToken=async(token:string):Promise<boolean>=>{
  const result=await sequelize.transaction(async(t:Transaction)=>{

    const cart:boolean | FindAttributesCart=await cartDel.GetCartByToken(token,t)
    if(typeof cart==="boolean"){
    throw new Error("Request Filed")
    }

   const removeCartItems=await cartItemsService.RemoveAllItems(cart.id,t)  
   if(removeCartItems===false){
    throw new Error("Request Filed")
    } 

    const removeCart=await cartDel.DeleteCart(token,t)
    if(removeCart===false){
    throw new Error("Request Filed")
    }
    return true  
  })
  return result
}

//RemoveItemCart
export const RemoveItemCart=async(token:string,productId:number):Promise<boolean>=>{
  const result=await sequelize.transaction(async(t:Transaction)=>{
    const cart:boolean | FindAttributesCart=await cartDel.GetCartByToken(token,t)
    if(typeof cart==="boolean"){
    throw new Error("Request Filed")
    }
    
    const items:boolean=await cartItemsService.RemoveCartItemsByCartIdAndProductID(cart.id,productId,t)
    if(items===false){
      throw new Error("Request Filed")
      }

   const findItems=await cartItemsService.FindAllItems({cartId:cart.id,t})
   if(findItems ===false){
    const removeCart:boolean=await cartDel.DeleteCart(token,t)
     console.log(removeCart)
     if(removeCart ===false){
       throw new Error("Request Filed")
  
       }
    }

      return true
  })
  return result
}


//UpdateStausCart

export const UpdateStausCart=async(token:string,status:number,t:Transaction):Promise<boolean>=>{
  const up=await cartDel.UpdateStausCart(token,status,t)
  return up
}