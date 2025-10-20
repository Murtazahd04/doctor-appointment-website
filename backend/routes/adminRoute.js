import express from 'express'
import { addDoctor , getAllDoctors, loginAdmin } from '../controller/adminController.js'
import upload from '../middleware/multer.js'
import authAdmin from '../middleware/authAdmin.js'
import { changeAvailability } from '../controller/doctorController.js'

const adminRouter =express.Router()

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-doctors',authAdmin,getAllDoctors)
adminRouter.post('/change-availability',authAdmin,changeAvailability)

export default adminRouter