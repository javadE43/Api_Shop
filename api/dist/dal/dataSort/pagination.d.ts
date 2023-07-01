import { FindAttributesCart } from "../../models/bo/Cart.js";
import { GetByTilteInterface } from "../../models/bo/Category.js";
import { RoleUsers } from "../../models/bo/User.js";
interface GetPagination {
    offset: number;
    limit: number;
}
export interface PaginationData {
    count: number;
    data: RoleUsers[] | FindAttributesCart[] | GetByTilteInterface[] | any;
    totalPages: number;
    currentPage: number;
    nextPage: boolean;
    previousPage: boolean;
}
export declare const getPagination: (page: number, size: number) => GetPagination;
export declare const paginationData: (data: RoleUsers[] | any, count: number, limit: number, offset: number) => PaginationData;
export {};
