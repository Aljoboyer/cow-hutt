import mongoose, { Schema, model } from "mongoose"
import { ICow } from "./cow.interface";

export const CowSchema = new Schema<ICow>({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    price: {
        type: Number
    },
    location:{
        type: String,
        enum : [
            "Dhaka",
            "Chattogram",
            "Barishal",
            "Rajshahi",
            "Sylhet",
            "Comilla",
            "Rangpur",
            "Mymensingh"]
    },
    breed:  {
        type: String
    },
    weight:{
        type: Number
    },
    label: {
        type: String,
        enum : ["for sale", "sold out"],
        default: 'for sale'
    },
    category:{
        type: String,
        enum : ["Dairy", "Beef", "Dual Purpose"],
        // default: 'for sale'
    },
    seller:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
})
 
export const Cow =  mongoose.model<ICow>("Cow", CowSchema);
