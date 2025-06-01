import express, { Router } from 'express'
import router from './userRoute'
import productController from '../controllers/productController'
import userMiddleware, { Role } from '../middleware/userMiddleware'
import { multer,storage} from '../middleware/multerMiddleware'
const upload= multer({storage:storage})
const route:Router=express.Router()

router.route("/").post(userMiddleware.isUserLoddedIn,userMiddleware.restrictTo(Role.Admin),upload.single("productImage"),productController.createProduct).get(productController.getAllProduct)
router.route("/:id").get(productController.getsingleAllProduct).delete(userMiddleware.isUserLoddedIn,userMiddleware.restrictTo(Role.Admin),productController.delectProduct)
export default router