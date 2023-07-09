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
exports.cowOrderService = exports.updateUser = exports.deleteUser = exports.getAUser = exports.getAllUser = exports.createUser = void 0;
const mongodb_1 = require("mongodb");
const ApiError_1 = __importDefault(require("../../Errors/ApiError"));
const user_model_1 = require("./user.model");
const cow_model_1 = require("../cow/cow.model");
const cow_order_model_1 = require("../cow/cow.order.model");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const password = Math.random().toString(36).slice(-8);
    const postObj = Object.assign(Object.assign({}, user), { password });
    const createdUser = yield user_model_1.User.create(postObj);
    if (!(createdUser === null || createdUser === void 0 ? void 0 : createdUser._id)) {
        throw new ApiError_1.default(400, "Failed to create user");
    }
    return createdUser;
});
exports.createUser = createUser;
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUser = yield user_model_1.User.find({});
    if ((allUser === null || allUser === void 0 ? void 0 : allUser.length) == 0) {
        throw new ApiError_1.default(400, "Failed to get all user");
    }
    return allUser;
});
exports.getAllUser = getAllUser;
const getAUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ _id: new mongodb_1.ObjectId(id) });
    if ((user === null || user === void 0 ? void 0 : user._id) == 0) {
        throw new ApiError_1.default(400, "Failed to get single user");
    }
    return user;
});
exports.getAUser = getAUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    if ((user === null || user === void 0 ? void 0 : user._id) == 0) {
        throw new ApiError_1.default(400, "Failed to delete cow");
    }
    return user;
});
exports.deleteUser = deleteUser;
const updateUser = (updateData, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.User.findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, { $set: updateData }, { new: true });
        return user;
    }
    catch (err) {
        throw new ApiError_1.default(400, "Failed to update  user");
    }
});
exports.updateUser = updateUser;
const cowOrderService = (orderBody) => __awaiter(void 0, void 0, void 0, function* () {
    const buyerProfile = yield user_model_1.User.findOne({ _id: new mongodb_1.ObjectId(orderBody.buyer) });
    const cowProfile = yield cow_model_1.Cow.findOne({ _id: new mongodb_1.ObjectId(orderBody.cow) });
    const sellerProfile = yield user_model_1.User.findOne({ _id: new mongodb_1.ObjectId(cowProfile === null || cowProfile === void 0 ? void 0 : cowProfile.seller) });
    if ((buyerProfile === null || buyerProfile === void 0 ? void 0 : buyerProfile.budget) > (cowProfile === null || cowProfile === void 0 ? void 0 : cowProfile.price)) {
        const cost = Number(buyerProfile === null || buyerProfile === void 0 ? void 0 : buyerProfile.budget) - Number(cowProfile === null || cowProfile === void 0 ? void 0 : cowProfile.price);
        const cows = yield cow_model_1.Cow.findOneAndUpdate({ _id: new mongodb_1.ObjectId(orderBody.cow) }, { $set: { label: 'sold out' } });
        const user1 = yield user_model_1.User.findOneAndUpdate({ _id: new mongodb_1.ObjectId(cowProfile === null || cowProfile === void 0 ? void 0 : cowProfile.seller) }, { $set: { income: cowProfile === null || cowProfile === void 0 ? void 0 : cowProfile.price } });
        const user2 = yield user_model_1.User.findOneAndUpdate({ _id: new mongodb_1.ObjectId(orderBody.buyer) }, { $set: { budget: Number(cost) } });
        const orderObj = {
            paidAmount: cowProfile === null || cowProfile === void 0 ? void 0 : cowProfile.price,
            cow: orderBody.cow,
            buyer: orderBody.buyer,
            seller: cowProfile === null || cowProfile === void 0 ? void 0 : cowProfile.seller
        };
        const orders = yield cow_order_model_1.CowOrderDetail.create(orderObj);
        return orders;
    }
    else {
        return { status: 400, message: 'You have not enough budget to buy' };
    }
});
exports.cowOrderService = cowOrderService;
//# sourceMappingURL=user.service.js.map