"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationCalculate = void 0;
const PaginationCalculate = (options) => {
    const page = (options === null || options === void 0 ? void 0 : options.page) || 1;
    const limit = (options === null || options === void 0 ? void 0 : options.limit) || 10;
    const skip = (page - 1) * limit;
    const srotBy = (options === null || options === void 0 ? void 0 : options.srotBy) || "year";
    const sortOrder = (options === null || options === void 0 ? void 0 : options.sortOrder) || "createdAt";
    return {
        page,
        limit,
        skip,
        srotBy,
        sortOrder
    };
};
exports.PaginationCalculate = PaginationCalculate;
//# sourceMappingURL=paginationHelper.js.map