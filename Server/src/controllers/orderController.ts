import { Request, Response } from "express";
import Order from "../database/models/orderModel";
import OrderDetail from "../database/models/orderDetails";
import Product from "../database/models/productModel";
import productController from "./productController";
import Payments from "../database/models/paymentModel";
import { PaymentMethod }from "../Globals/types"

interface IProduct{
    productId:string,
    productQty:string
}

interface OrderRequest extends Request{
    user?:{
        id: string
    }
}
class OrderController{
    async createOrder(req:OrderRequest,res:Response):Promise<void>{
            const userId =  req.user?.id
        const {phoneNumber,shippingAddress,totalAmount,paymentMethod} = req.body 
        const products:IProduct[] = req.body.products
        if(!phoneNumber || !shippingAddress || !totalAmount || products.length == 0 ){
            res.status(400).json({
                message : "Please provide phoneNumber,shippingAddress,totalAmount,products"
            })
            return
        }
        // for order 
        const orderData = await Order.create({
            phoneNumber, 
            shippingAddress, 
            totalAmount, 
            userId
        })
        // for orderDetails
        console.log(orderData,"OrderData!!")
        console.log(products)
      products.forEach(async function(product){
        await OrderDetail.create({
            quantity : product.productQty, 
            productId : product.productId, 
            orderId : orderData.id
        })
      })
      // for payment 
      if(paymentMethod == PaymentMethod.COD){
        await Payments.create({
            orderId : orderData.id, 
            paymentMethod : paymentMethod, 
        })
      }else if (paymentMethod == PaymentMethod.khalti){
        // khalti logic
      }else{
        // esewa logic

      }
      res.status(200).json({
        message : "Order created successfully"
      })
    }
}

export default new OrderController