
export const conditionGetAllCategory=(categoryName:string|undefined,content:string|undefined,Op:any):any=>{
 let option;
    if(categoryName && !content){
        option={title:{[Op.substring]:categoryName}}
    }
    else if(content && !categoryName){
        option={content:{[Op.substring]:content}}
    }
    else if(content && categoryName){
        option={[Op.or]:[{title:{[Op.substring]:categoryName}},{content:{[Op.substring]:content}}]}
    }else{
        option=undefined
    }
    return option
}