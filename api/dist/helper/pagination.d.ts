import { RoleUsers } from "../models/bo/User.js";
interface GetPagination {
    offset: number;
    limit: number;
}
interface PaginationData {
    count: number;
    data: RoleUsers[];
    totalPages: number;
    currentPage: number;
    nextPage: boolean;
    previousPage: boolean;
}
export declare const getPagination: (page: number, size: number) => GetPagination;
export declare const paginationData: (data: RoleUsers[], count: number, limit: number, offset: number) => PaginationData;
export {};
