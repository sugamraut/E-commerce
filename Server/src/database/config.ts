import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";
import product from "./models/productModel";
import category from "./models/categoryModel";
import User from "./models/userModel";
import Order from "./models/orderModel";
import Payments from "./models/paymentModel";
import OrderDetail from "./models/orderDetails";


const sequelize=new Sequelize(envConfig.connectionString as string,{models :[__dirname + '/models']})

 
try {
    sequelize.authenticate()
    .then(()=>{
        console.log("Connected !!! 😀")
    })
    .catch(err=>{
        console.log("ERROR 😝 : ", err)
    })
} catch (error) {
    console.log(error)
}

sequelize.sync({force : false,alter:true}).then(()=>{
    console.log("synced !!")
})

//relationships//
product.belongsTo(category,{foreignKey:'categoryId'})
category.hasOne(product,{foreignKey:'categoryId'})
//user X order
Order.belongsTo(User,{foreignKey:'userId'})
User.hasMany(Order,{foreignKey:'userId'})

//payment X order payment ma order id chaeyo
Payments.belongsTo(Order,{foreignKey:'orderId'})
Order.hasOne(Payments,{foreignKey:'orderId'})
// order X orderDetails orderDetails ma order id chayo bhana
OrderDetail.belongsTo(Order,{foreignKey:'orderId'})
Order.hasOne(OrderDetail,{foreignKey:'orderId'})

product.hasMany(OrderDetail,{foreignKey:"productId"})
OrderDetail.belongsTo(product,{foreignKey:"productId"})

export default sequelize
