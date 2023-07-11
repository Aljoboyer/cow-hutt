const router = require("express").Router();
import UserRoute from '../modules/Users/user.routes'
import CowRoute from '../modules/cow/cow.route'
import AdminRoute from '../modules/admin/admin.routes'

router.use("/api/v1/auth", UserRoute);
router.use("/api/v1", UserRoute);
router.use("/api/v1", CowRoute);
router.use("/api/v1/admins", AdminRoute);

export default router