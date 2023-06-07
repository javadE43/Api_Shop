import { Response } from "express";

export const cookieAuth=(res:Response,refreshToken:string)=>{
  res.cookie("shop",refreshToken,{
    httpOnly: true,
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24,
  })
}
export const cookieCart=(res:Response,tokenCart:string)=>{
  res.cookie("cart",tokenCart,{
    httpOnly: true,
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24,
  })
}
export const deleteCookie=(res:Response,name:string)=>{
  res.clearCookie(name,{
    httpOnly: true,
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24,
  })
}

