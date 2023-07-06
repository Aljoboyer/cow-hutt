import { CowOrderController } from "../cow/cow.controller";
import { CreateUserController, getAllUserController, getSingleUser, deleteUserController, updateUserController } from "./user.controller";

const router = require("express").Router();

router.post('/signup', CreateUserController)
router.get('/users', getAllUserController)
router.get('/users/:id', getSingleUser)
router.delete('/users/:id', deleteUserController)
router.patch('/users/:id', updateUserController)
router.post('/orders', CowOrderController)

export default router