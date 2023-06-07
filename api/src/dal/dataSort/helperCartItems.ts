import { Transaction } from "sequelize";

export const conditionGetAllCartItems=(token?:string,cartId?:number ):any=>{
    let option;
       if(token && !cartId){
        option={token:token}
       }
       else if(cartId && !token){
        option={cartId:cartId}
       }
        else{
           option=undefined
       }
       return option
   }


   export interface FindAllItemsParams{
    cartId?:number
    token?:string
    t?:Transaction
   }