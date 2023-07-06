import { CowFilterController, CowOrderController, CreateCowController, deleteCowController, getAllCowController, getSingleCow, updateCowController } from "./cow.controller";


const router = require("express").Router();

router.post('/cows', CreateCowController)
router.get('/cows', getAllCowController)
router.get('/cows/:id', getSingleCow)
router.delete('/cows/:id', deleteCowController)
router.patch('/cows/:id', updateCowController)
router.get('/cows?', CowFilterController)


export default router