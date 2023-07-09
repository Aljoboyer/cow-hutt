"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./user.controller");
const router = require("express").Router();
router.post('/signup', user_controller_1.CreateUserController);
router.get('/users', user_controller_1.getAllUserController);
router.get('/users/:id', user_controller_1.getSingleUser);
router.delete('/users/:id', user_controller_1.deleteUserController);
router.patch('/users/:id', user_controller_1.updateUserController);
router.post('/orders', user_controller_1.CowOrderController);
exports.default = router;
//# sourceMappingURL=user.routes.js.map