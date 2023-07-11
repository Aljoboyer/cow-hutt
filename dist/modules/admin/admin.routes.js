"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_controller_1 = require("./admin.controller");
const router = require("express").Router();
router.post('/create-admin', admin_controller_1.CreateAdminController);
router.post('/login', admin_controller_1.adminLoginController);
exports.default = router;
//# sourceMappingURL=admin.routes.js.map