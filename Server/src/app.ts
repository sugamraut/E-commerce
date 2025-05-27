import express from 'express'
const app =express()
import './database/config'
import userRoute from './routes/userRoute'
import User from './database/models/userModel'

app.use(express.json())
const schedule = require('node-schedule');

const job = schedule.scheduleJob('42 * * * *', async function(){
   await User.findAll()
});
// localhost:3000/api/auth/
app.use("/api/auth",userRoute)
export default app