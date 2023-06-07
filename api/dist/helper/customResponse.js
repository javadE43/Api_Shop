export function response(data) {
    return data.res.status(data.code).json({ data: data.data, message: data.message, count: data.count, totalPages: data.totalPages, currentPage: data.currentPage, nextPage: data.nextPage, previousPage: data.previousPage });
}
//# sourceMappingURL=customResponse.js.map