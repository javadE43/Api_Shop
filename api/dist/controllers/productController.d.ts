import { Request, Response } from "express";
export declare const createProduct: (req: Request, res: Response) => Promise<void>;
export declare const insertProductOnCategory: (req: Request, res: Response) => Promise<void>;
export declare const getProductById: (req: Request, res: Response) => Promise<void>;
export declare const getProductsByTitle: (req: Request, res: Response) => Promise<void>;
export declare const UpdateProductOnCategory: (req: Request, res: Response) => Promise<void>;
export declare const UpdateProductById: (req: Request, res: Response) => Promise<void>;
export declare const DeleteProductById: (req: Request, res: Response) => Promise<void>;
