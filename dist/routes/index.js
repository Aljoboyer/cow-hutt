"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const user_routes_1 = __importDefault(require("../modules/Users/user.routes"));
const cow_route_1 = __importDefault(require("../modules/cow/cow.route"));
router.use("/api/v1/auth", user_routes_1.default);
router.use("/api/v1", user_routes_1.default);
router.use("/api/v1", cow_route_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map