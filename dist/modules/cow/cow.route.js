"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guard_1 = require("../../guard/guard");
const cow_controller_1 = require("./cow.controller");
const router = require("express").Router();
router.post('/cows', cow_controller_1.CreateCowController);
router.get('/cows', guard_1.jwtChecker, cow_controller_1.getAllCowController);
router.get('/cows/:id', guard_1.jwtChecker, cow_controller_1.getSingleCow);
router.delete('/cows/:id', guard_1.jwtChecker, cow_controller_1.deleteCowController);
router.patch('/cows/:id', guard_1.jwtChecker, cow_controller_1.updateCowController);
router.get('/cows?', guard_1.jwtChecker, cow_controller_1.CowFilterController);
exports.default = router;
//# sourceMappingURL=cow.route.js.map