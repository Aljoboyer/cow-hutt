import { jwtChecker } from "../../guard/guard";
import { CreateAdminController, adminLoginController } from "./admin.controller";

const router = require("express").Router();

router.post('/create-admin',CreateAdminController)
router.post('/login',jwtChecker,  adminLoginController)

export default router