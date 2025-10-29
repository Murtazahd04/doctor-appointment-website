import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from '../config/mongodb.js'
import connectCloudinary from '../config/cloudinary.js'
import adminRouter from '../routes/adminRoute.js'
import doctorRouter from '../routes/doctorRoute.js'
import userRouter from '../routes/userRoute.js'
import  serverless from 'serverless-http';
// app config
const app = express()

connectDB()
connectCloudinary()


// middlewares
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
}))


// api endpoint
app.use('/api/admin',adminRouter)
// localhost:4000/apiadmin/paid-doctor
app.use('/api/doctor',doctorRouter)
app.use('/api/user' , userRouter)

app.get('/',(req,res)=>{
    res.send('API WORKING')
})  



// Export the app and the server instance (ES module exports)
export default app
export const server = serverless(app);
