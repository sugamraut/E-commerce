import express, { Router } from 'express'
import router from './userRoute'
import productController from '../controllers/productController'
import userMiddleware, { Role } from '../middleware/userMiddleware'
import { multer,storage} from '../middleware/multerMiddleware'
import errorHandler from '../services/erorrHandler'
const upload= multer({storage:storage})
const route:Router=express.Router()

router.route("/").post(userMiddleware.isUserLoddedIn,userMiddleware.restrictTo(Role.Admin),upload.single("productImage"),errorHandler(productController.createProduct)).get(errorHandler(productController.getAllProduct))
router.route("/:id").get(errorHandler(productController.getsingleAllProduct)).delete(userMiddleware.isUserLoddedIn,userMiddleware.restrictTo(Role.Admin), errorHandler(productController.delectProduct))
export default router