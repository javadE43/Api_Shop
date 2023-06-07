import * as tokendel from "../dal/tokenDel.js"


export const GetTokenByNameAndUserId=(userId:number,name:string):Promise<boolean | tokendel.DataToken>=>{
    return tokendel.GetTokenByNameAndUserId(userId,name)

}