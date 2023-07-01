export const getPagination = (page, size) => {
    const limit = size;
    const offset = page * limit;
    return { limit, offset };
};
export const paginationData = (data, count, limit, offset) => {
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
//# sourceMappingURL=pagination.js.map