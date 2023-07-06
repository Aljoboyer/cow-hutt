import mongoose, { Schema, model } from "mongoose"
import { ICowOrder } from "./cow.interface";

export const CowOrderSchema = new Schema<ICowOrder>({
    paidAmount:{
        type: Number
    },
    cow:{
        type: Schema.Types.ObjectId,
        ref: 'Cow'
    },
    buyer:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    seller:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
})
 
export const CowOrderDetail =  mongoose.model<ICowOrder>("CowOrderDetail", CowOrderSchema);
