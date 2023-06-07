import { Response, Request } from "express";
export declare const create: (req: Request, res: Response) => Promise<void>;
export declare const getUser: (req: Request, res: Response) => Promise<void>;
export declare const getByIdUser: (req: Request, res: Response) => Promise<void>;
export declare const updateUser: (req: Request, res: Response) => Promise<void>;
export declare const removeUser: (req: Request, res: Response) => Promise<void>;
export declare const removeMultipleUsers: (req: Request, res: Response) => Promise<void>;
export declare const LogOutUser: (req: Request, res: Response) => Promise<void>;
