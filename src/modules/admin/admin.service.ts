import { IAdmin } from "./admin.interface";
import { Admin } from "./admin.model";
import ApiError from "../../Errors/ApiError";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
const bcrypt = require('bcrypt');

const createAdmin = async (user: IAdmin): Promise<any> => {
    const {password, ...otherData} = user
    const Encryptedpassword =  await bcrypt.hash(password, 10)
    const postObj = {...otherData, password: Encryptedpassword}
    const exists = await Admin.findOne({phoneNumber: otherData?.phoneNumber})
    if(exists?.phoneNumber){
       return  {
        "success": false, 
        "statusCode":400,
        "message": "Admin created Failed, Phone number already exists",
        "data": {}, 
        }
    }
    else{
        const createdUser = await Admin.create(postObj)
        if(!createdUser?._id){
            throw new ApiError(400,"Failed to create Admin");
        }
        return {
            "success": true, 
            "statusCode":200,
            "message": "Admin created successfully",
            "data": createdUser, 
            }
    }
}

const loginAdmin = async (user: IAdmin): Promise<any> => {
    const {password, phoneNumber} = user

    const userData = await Admin.findOne({phoneNumber: phoneNumber})
    
    if(!userData?.phoneNumber){
        return{
            "success": false, 
            "statusCode":200,
            "message": "This user does not exists.",
            "data": {
               "accessToken":  "", 
               }
          }
    }
    if (!bcrypt.compareSync(password, userData.password)) {
        // Return unauthorized if password does not match
        return{
            "success": false, 
            "statusCode":200,
            "message": "Password is incorrect. Try again.",
            "data": {
               "accessToken":  "", 
               }
          } 
      }
    else{
        const accessToken = jwt.sign(
            {id: userData?._id, role: userData?.role},
            "CowHuttSecret",
            {
              expiresIn: "1hr",
            }
          )
          const refreshToken = jwt.sign(
            {id: userData?._id, role: userData?.role},
            "CowHuttSecret",
            {
              expiresIn: "1d",
            }
          )
          return{
            "refreshToken": refreshToken,
            "success": true, 
            "statusCode":200,
            "message": "User logged in successfully.",
            "data": {
               "accessToken":  accessToken, 
               }
          } 
    }

}

export  {
    createAdmin,
    loginAdmin
}