import * as tokendel from "../dal/tokenDel.js";
export declare const GetTokenByNameAndUserId: (userId: number, name: string) => Promise<boolean | tokendel.DataToken>;
