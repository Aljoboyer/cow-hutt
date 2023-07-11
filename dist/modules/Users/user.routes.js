"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./user.controller");
const guard_1 = require("../../guard/guard");
const router = require("express").Router();
router.post('/signup', user_controller_1.CreateUserController);
router.get('/users', guard_1.jwtChecker, user_controller_1.getAllUserController);
router.get('/users/:id', guard_1.jwtChecker, user_controller_1.getSingleUser);
router.delete('/users/:id', guard_1.jwtChecker, user_controller_1.deleteUserController);
router.patch('/users/:id', guard_1.jwtChecker, user_controller_1.updateUserController);
router.post('/orders', guard_1.jwtChecker, user_controller_1.CowOrderController);
exports.default = router;
//# sourceMappingURL=user.routes.js.map