import express from 'express'
const app =express()
import './database/config'
import userRoute from './routes/userRoute'
import User from './database/models/userModel'
import categoryRoute from './routes/categoryController'
import productRoute from "./routes/productRoute"
import orderRoute from "./routes/order.Route"

app.use(express.json())
const schedule = require('node-schedule');

const job = schedule.scheduleJob('42 * * * *', async function(){
   await User.findAll()
});
// localhost:3000/api/auth/
app.use("/api/auth",userRoute)
app.use("/api/category",categoryRoute)
app.use("/api/product",productRoute)
app.use("/api/order",orderRoute)
export default app