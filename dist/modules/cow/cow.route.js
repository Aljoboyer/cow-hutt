"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cow_controller_1 = require("./cow.controller");
const router = require("express").Router();
router.post('/cows', cow_controller_1.CreateCowController);
router.get('/cows', cow_controller_1.getAllCowController);
router.get('/cows/:id', cow_controller_1.getSingleCow);
router.delete('/cows/:id', cow_controller_1.deleteCowController);
router.patch('/cows/:id', cow_controller_1.updateCowController);
router.get('/cows?', cow_controller_1.CowFilterController);
exports.default = router;
//# sourceMappingURL=cow.route.js.map