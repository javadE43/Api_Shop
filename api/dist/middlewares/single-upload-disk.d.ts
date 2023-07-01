/// <reference types="qs" />
/// <reference types="express" />
export declare const UploadSingleImage: (fieldName: string, startWithfilename: string) => import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
