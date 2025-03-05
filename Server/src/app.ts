import express from 'express'
const app =express()
import './database/config'
import userRoute from './routes/userRoute'

app.use(express.json())

// localhost:3000/api/auth/
app.use("/api/auth",userRoute)
export default app