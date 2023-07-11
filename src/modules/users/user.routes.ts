
import {CowOrderController, CreateUserController, getAllUserController, getSingleUser, deleteUserController, updateUserController } from "./user.controller";
import { jwtChecker } from "../../guard/guard";

const router = require("express").Router();

router.post('/signup', CreateUserController)
router.get('/users',jwtChecker,  getAllUserController)
router.get('/users/:id',jwtChecker,  getSingleUser)
router.delete('/users/:id',jwtChecker,  deleteUserController)
router.patch('/users/:id',jwtChecker,  updateUserController)
router.post('/orders',jwtChecker,  CowOrderController)

export default router