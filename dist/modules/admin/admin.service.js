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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAdmin = exports.createAdmin = void 0;
const admin_model_1 = require("./admin.model");
const ApiError_1 = __importDefault(require("../../Errors/ApiError"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt = require('bcrypt');
const createAdmin = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = user, otherData = __rest(user, ["password"]);
    const Encryptedpassword = yield bcrypt.hash(password, 10);
    const postObj = Object.assign(Object.assign({}, otherData), { password: Encryptedpassword });
    const exists = yield admin_model_1.Admin.findOne({ phoneNumber: otherData === null || otherData === void 0 ? void 0 : otherData.phoneNumber });
    if (exists === null || exists === void 0 ? void 0 : exists.phoneNumber) {
        return {
            "success": false,
            "statusCode": 400,
            "message": "Admin created Failed, Phone number already exists",
            "data": {},
        };
    }
    else {
        const createdUser = yield admin_model_1.Admin.create(postObj);
        if (!(createdUser === null || createdUser === void 0 ? void 0 : createdUser._id)) {
            throw new ApiError_1.default(400, "Failed to create Admin");
        }
        return {
            "success": true,
            "statusCode": 200,
            "message": "Admin created successfully",
            "data": createdUser,
        };
    }
});
exports.createAdmin = createAdmin;
const loginAdmin = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, phoneNumber } = user;
    const userData = yield admin_model_1.Admin.findOne({ phoneNumber: phoneNumber });
    if (!(userData === null || userData === void 0 ? void 0 : userData.phoneNumber)) {
        return {
            "success": false,
            "statusCode": 200,
            "message": "This user does not exists.",
            "data": {
                "accessToken": "",
            }
        };
    }
    if (!bcrypt.compareSync(password, userData.password)) {
        // Return unauthorized if password does not match
        return {
            "success": false,
            "statusCode": 200,
            "message": "Password is incorrect. Try again.",
            "data": {
                "accessToken": "",
            }
        };
    }
    else {
        const accessToken = jsonwebtoken_1.default.sign({ id: userData === null || userData === void 0 ? void 0 : userData._id, role: userData === null || userData === void 0 ? void 0 : userData.role }, "CowHuttSecret", {
            expiresIn: "1hr",
        });
        const refreshToken = jsonwebtoken_1.default.sign({ id: userData === null || userData === void 0 ? void 0 : userData._id, role: userData === null || userData === void 0 ? void 0 : userData.role }, "CowHuttSecret", {
            expiresIn: "1d",
        });
        return {
            "refreshToken": refreshToken,
            "success": true,
            "statusCode": 200,
            "message": "User logged in successfully.",
            "data": {
                "accessToken": accessToken,
            }
        };
    }
});
exports.loginAdmin = loginAdmin;
//# sourceMappingURL=admin.service.js.map