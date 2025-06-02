


import  express,{Router}  from "express";
import categoryController from "../controllers/categoryController";
import userMiddleware, { Role } from "../middleware/userMiddleware";
import errorHandler from '../services/erorrHandler'
const router:Router=express.Router()

router.route("/").get(categoryController.getcategories).post( userMiddleware.isUserLoddedIn,userMiddleware.restrictTo(Role.Admin),errorHandler(categoryController.addCategory))
router.route("/:id").patch(userMiddleware.restrictTo(Role.Admin),categoryController.updatecategory).delete(userMiddleware.restrictTo(Role.Admin) ,categoryController.deletecategories)

export default router