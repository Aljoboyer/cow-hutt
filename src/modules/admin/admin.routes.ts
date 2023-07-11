import { jwtChecker } from "../../guard/guard";
import { CreateAdminController, adminLoginController } from "./admin.controller";

const router = require("express").Router();

router.post('/create-admin',CreateAdminController)
router.post('/login',  adminLoginController)

export default router