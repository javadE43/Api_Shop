export const conditionGetOrder=(token:string | null,userId:number | null,orderId:number | null,)=>{
    let option;

    if(token && !userId && !orderId){
        option={token:token}
    }else if(userId && !token && !orderId){
        option={userId:userId}
    }else if(orderId && !token && !userId){
        option={orderId:orderId}
    }else{
        option=undefined
    }

    return option
}