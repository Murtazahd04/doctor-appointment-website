import validator from "validator"
import bycrypt from 'bcrypt'

const addDoctor=async()=>{
    try{
        const {name,email,password,speciality,degree,experience,about,fees,address}=req.body
        const imageFile=req.file

        if(!name||!email||!password||!speciality||!degree||!experience||!about||!fees||!address||){
            return resizeBy.json({success:false,message:"Missing Details"})
        }

        if(!validator.isEmail(email)){
            return resizeBy.json({success:false,message:"Please eneter a valid email"})
        }

        //validating strong password
        if(password.length<8){
            return resizeBy.json({success:false,message:"Please enter a strong password"})
        }

        const salt=await bycrypt.genSalt(10)
        const hashedPassword=await bycrypt.hash(password,salt)
        


    }catch(error){

    }
}

export {addDoctor}