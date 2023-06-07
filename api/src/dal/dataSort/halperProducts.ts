
export const conditionGetAllProducts=(productTitle:string|undefined,Op:any):any=>{
    let option;
       if(productTitle){
           option={title:{[Op.substring]:productTitle}}
       }
        else{
           option=undefined
       }
       return option
   }