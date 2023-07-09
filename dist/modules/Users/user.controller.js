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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowOrderController = exports.deleteUserController = exports.updateUserController = exports.getSingleUser = exports.getAllUserController = exports.CreateUserController = void 0;
const user_service_1 = require("./user.service");
const CreateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, user_service_1.createUser)(req.body);
    res.send({
        "success": true,
        "statusCode": 200,
        "message": "User created successfully",
        "data": data,
    });
});
exports.CreateUserController = CreateUserController;
const getAllUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, user_service_1.getAllUser)();
    res.send({
        "success": true,
        "statusCode": 200,
        "message": "Users retrieved successfully",
        "data": data,
    });
});
exports.getAllUserController = getAllUserController;
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, user_service_1.getAUser)(req.params.id);
    res.send({
        "success": true,
        "statusCode": 200,
        "message": "Users retrieved successfully",
        "data": data,
    });
});
exports.getSingleUser = getSingleUser;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, user_service_1.updateUser)(req.body, req.params.id);
    res.send({
        "success": true,
        "statusCode": 200,
        "message": "Users updated successfully",
        "data": data,
    });
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, user_service_1.deleteUser)(req.params.id);
    res.send({
        "success": true,
        "statusCode": 200,
        "message": "Users deleted successfully",
        "data": data,
    });
});
exports.deleteUserController = deleteUserController;
const CowOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const OrderDetail = yield (0, user_service_1.cowOrderService)(req.body);
    res.send({
        "success": true,
        "statusCode": 200,
        "message": "Cow deleted successfully",
        "data": OrderDetail,
    });
});
exports.CowOrderController = CowOrderController;
//# sourceMappingURL=user.controller.js.map