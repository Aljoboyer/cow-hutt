import mongoose, { Schema, model } from "mongoose"
import { IUser } from "./user.interface";


export const UserSchema = new Schema<IUser>({
    phoneNumber: {
        type: String,
    },
    role:  {
        type: String,
        enum : ['seller','buyer'],
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
    budget:  {
        type: Number,
    },
    income: {
        type: Number,
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
 
export const User =  mongoose.model<IUser>("User", UserSchema);
