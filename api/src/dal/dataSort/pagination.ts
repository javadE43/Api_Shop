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

export const getPagination = (page: number, size: number): GetPagination => {
  const limit = size;
  const offset = page * limit;
  return { limit, offset };
};

export const paginationData = (
  data: RoleUsers[] | any,
  count: number,
  limit: number,
  offset: number
): PaginationData => {
  const currentPage = offset;
  const totalPages = Math.ceil(count / limit);
  const nextPage = currentPage < totalPages;
  const previousPage = currentPage > 0;
  return {
    count,
    data,
    totalPages,
    currentPage,
    nextPage,
    previousPage,
  };
};
