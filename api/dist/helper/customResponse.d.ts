import { Response } from "express";
interface Return<T> {
    res: Response;
    message: string;
    code: number;
    data?: T;
    count?: number;
    totalPages?: number;
    currentPage?: number;
    nextPage?: boolean;
    previousPage?: boolean;
}
export declare function response<T>(data: Return<T>): Response<any, Record<string, any>>;
export {};
