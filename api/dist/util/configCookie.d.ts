import { Response } from "express";
export declare const cookieAuth: (res: Response, refreshToken: string) => void;
export declare const cookieCart: (res: Response, tokenCart: string) => void;
export declare const deleteCookie: (res: Response, name: string) => void;
