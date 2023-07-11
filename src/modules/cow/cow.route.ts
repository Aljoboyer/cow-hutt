import { jwtChecker } from "../../guard/guard";
import { CowFilterController, CreateCowController, deleteCowController, getAllCowController, getSingleCow, updateCowController } from "./cow.controller";


const router = require("express").Router();

router.post('/cows', CreateCowController)
router.get('/cows',jwtChecker,  getAllCowController)
router.get('/cows/:id',jwtChecker,  getSingleCow)
router.delete('/cows/:id',jwtChecker,  deleteCowController)
router.patch('/cows/:id',jwtChecker,  updateCowController)
router.get('/cows?',jwtChecker,  CowFilterController)


export default router