import mongoose, { Schema, model } from "mongoose"
import { IAdmin } from "./admin.interface";


export const AdminSchema = new Schema<IAdmin>({
    phoneNumber: {
        type: String,
        unique: true
    },
    role:  {
        type: String,
        enum : ['admin'],
    }, 
    password:  {
        type: String,
    },
    name: {
        firstName:  {
            type: String,
        },
        lastName:  {
            type: String,
        },
    },
    address:  {
        type: String,
    },
    createdAt:  {
        type: String,
    },
    updatedAt:  {
        type: String,
    }
},{
    timestamps: true
})
 
export const Admin =  mongoose.model<IAdmin>("Admin", AdminSchema);