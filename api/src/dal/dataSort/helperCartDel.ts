
export const conditionGetAllCart=(cartId:number |null,token:string|null,userId:number | null,Op:any):any=>{
    let option;
       if(token && !userId){
           option={token:{[Op.substring]:token}}
       }else if(userId && !token){
        option={userId:userId}
       }else if(cartId && !userId && !token){
        option={id:cartId}
       } else if(userId && token){
         option={
            token:{[Op.substring]:token},
            userId:userId
         }  
       }
        else{
           option=undefined
       }
       return option
   }