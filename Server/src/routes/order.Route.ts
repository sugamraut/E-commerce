import  express,{Router}  from "express";
import orderController from "../controllers/orderController";
import userMiddleware from "../middleware/userMiddleware";
import eroorHandler from "../services/erorrHandler";
const router = express.Router()
router.route("/").post(userMiddleware.isUserLoddedIn, eroorHandler(orderController.createOrder))

export default router