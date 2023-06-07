import { Response } from "express";

interface Return<T> {
  res:Response;
  message: string;
  code: number;
  data?: T;
  count?:number
  totalPages?:number
  currentPage?:number
  nextPage?:boolean
  previousPage?:boolean
}

export function response<T>(data: Return<T>) {
  return data.res.status(data.code).json({data:data.data,message:data.message,count:data.count,totalPages:data.totalPages,currentPage:data.currentPage,nextPage:data.nextPage,previousPage:data.previousPage});
}
