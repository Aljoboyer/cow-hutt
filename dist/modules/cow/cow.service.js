"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCowByFiltering = exports.updateCow = exports.deleteCow = exports.getACow = exports.getAllCow = exports.createCowService = void 0;
const mongodb_1 = require("mongodb");
const ApiError_1 = __importDefault(require("../../Errors/ApiError"));
const cow_model_1 = require("./cow.model");
const paginationHelper_1 = require("../../helper/paginationHelper");
const createCowService = (cow) => __awaiter(void 0, void 0, void 0, function* () {
    const createCow = yield cow_model_1.Cow.create(cow);
    if (!createCow) {
        throw new ApiError_1.default(400, "Failed to create cow");
    }
    return createCow;
});
exports.createCowService = createCowService;
const getAllCow = () => __awaiter(void 0, void 0, void 0, function* () {
    const allCow = yield cow_model_1.Cow.find({});
    if ((allCow === null || allCow === void 0 ? void 0 : allCow.length) == 0) {
        throw new ApiError_1.default(400, "Failed to get all cow");
    }
    return allCow;
});
exports.getAllCow = getAllCow;
const getACow = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cows = yield cow_model_1.Cow.findOne({ _id: new mongodb_1.ObjectId(id) });
    if ((cows === null || cows === void 0 ? void 0 : cows._id) == 0) {
        throw new ApiError_1.default(400, "Failed to get cow");
    }
    return cows;
});
exports.getACow = getACow;
const updateCow = (updateData, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cows = yield cow_model_1.Cow.findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, { $set: updateData }, { new: true });
        return cows;
    }
    catch (err) {
        throw new ApiError_1.default(400, "Failed to update  user");
    }
});
exports.updateCow = updateCow;
const deleteCow = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cows = yield cow_model_1.Cow.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    if ((cows === null || cows === void 0 ? void 0 : cows._id) == 0) {
        throw new ApiError_1.default(400, "Failed to delete cow");
    }
    return cows;
});
exports.deleteCow = deleteCow;
const getCowByFiltering = (filterOption, paginationOption) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filterOption;
    const searchCondition = [
        {
            $or: [
                {
                    title: {
                        $reges: searchTerm,
                        $options: 'i'
                    }
                },
                {
                    code: {
                        $reges: searchTerm,
                        $options: 'i'
                    }
                },
                {
                    year: {
                        $reges: searchTerm,
                        $options: 'i'
                    }
                }
            ]
        }
    ];
    const { page, limit, skip, srotBy, sortOrder } = (0, paginationHelper_1.PaginationCalculate)(paginationOption);
    const sortOption = {};
    if (srotBy && sortOrder) {
        sortOption[srotBy] = sortOrder;
    }
    const result = yield cow_model_1.Cow.find({}).sort(sortOption).skip(skip).limit(limit);
    const total = yield cow_model_1.Cow.countDocuments();
    return {
        page,
        limit,
        data: result,
        totalNumberOfData: total
    };
});
exports.getCowByFiltering = getCowByFiltering;
//# sourceMappingURL=cow.service.js.map