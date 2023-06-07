import { OutPutProductsOnCategory } from "./models/bo/Product.js";

interface Review{
  title:string
  content:string
  productId:number
  rating:number
}

export {};

declare global {
  var baseurl: string;
  namespace;
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV:  'development' | 'production';
      HOSTNAME: string;
      PORT: string;
      HOST: string;
      USER: string;
      PASS: string;
      DB: string;
      PORTDB: number;
      DIALECT: string;
      MAX: number;
      MIN: number;
      ACQUIRE: number;
      IDLE: number;
      SECRET_ACCESSTOKEN: string;
      SECRET_REFRESHTOKEN: string;
      TOKEN_CART:string
    }
  }

  namespace Express {
    interface Request {
      username: string;
      role:number;
      userId:number;
      product:OutPutProductsOnCategory;
      review:Review;
      productId:number;
    }
    interface Response {}
  }
}
