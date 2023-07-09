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
exports.CowFilterController = exports.deleteCowController = exports.updateCowController = exports.getSingleCow = exports.getAllCowController = exports.CreateCowController = void 0;
const cow_service_1 = require("./cow.service");
const pickHelper_1 = __importDefault(require("../../helper/pickHelper"));
const paginationConstants_1 = require("../../constants/paginationConstants");
const CreateCowController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, cow_service_1.createCowService)(req.body);
    res.send({
        "success": true,
        "statusCode": 200,
        "message": "Cow created successfully",
        "data": data,
    });
});
exports.CreateCowController = CreateCowController;
const getAllCowController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, cow_service_1.getAllCow)();
    res.send({
        "success": true,
        "statusCode": 200,
        "message": "Cows retrieved successfully",
        "data": data,
    });
});
exports.getAllCowController = getAllCowController;
const getSingleCow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, cow_service_1.getACow)(req.params.id);
    res.send({
        "success": true,
        "statusCode": 200,
        "message": "Cow retrieved successfully",
        "data": data,
    });
});
exports.getSingleCow = getSingleCow;
const updateCowController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body, req.params.id);
    const data = yield (0, cow_service_1.updateCow)(req.body, req.params.id);
    res.send({
        "success": true,
        "statusCode": 200,
        "message": "Cow updated successfully",
        "data": data,
    });
});
exports.updateCowController = updateCowController;
const deleteCowController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, cow_service_1.deleteCow)(req.params.id);
    res.send({
        "success": true,
        "statusCode": 200,
        "message": "Cow deleted successfully",
        "data": data,
    });
});
exports.deleteCowController = deleteCowController;
const CowFilterController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filterOption = (0, pickHelper_1.default)(req === null || req === void 0 ? void 0 : req.query, ["searchTerm"]);
    const paginationOption = (0, pickHelper_1.default)(req.query, paginationConstants_1.PaginationField);
    const reqult = yield (0, cow_service_1.getCowByFiltering)(filterOption, paginationOption);
    res.send({
        "success": true,
        "statusCode": 200,
        "message": "Cow deleted successfully",
        "data": reqult,
    });
});
exports.CowFilterController = CowFilterController;
//# sourceMappingURL=cow.controller.js.map