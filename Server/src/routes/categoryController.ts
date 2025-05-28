


import  express,{Router}  from "express";
import categoryController from "../controllers/categoryController";
import userMiddleware from "../middleware/userMiddleware";
const router:Router=express.Router()

router.route("/").get(categoryController.getcategories).post( userMiddleware.isUserLoddedIn,categoryController.addCategory)
router.route("/:id").patch(categoryController.updatecategory).delete(categoryController.deletecategories)

export default router