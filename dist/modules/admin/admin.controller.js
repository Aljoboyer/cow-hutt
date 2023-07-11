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
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminLoginController = exports.CreateAdminController = void 0;
const admin_service_1 = require("./admin.service");
const CreateAdminController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, admin_service_1.createAdmin)(req.body);
    res.send(data);
});
exports.CreateAdminController = CreateAdminController;
const adminLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, admin_service_1.loginAdmin)(req.body);
    const { refreshToken } = data, otherData = __rest(data, ["refreshToken"]);
    const cookieOptions = { secure: false, httpOnly: true };
    res.cookie('refreshToken', refreshToken, cookieOptions);
    res.send(otherData);
});
exports.adminLoginController = adminLoginController;
//# sourceMappingURL=admin.controller.js.map