import { ObjectId } from "mongodb";
import { Types } from "mongoose";

export interface ICow {
    name: string,
    age: number,
    price: number,
    location: string,
    breed: string,
    weight: number,
    label: string,
    category: string,
    seller: Types.ObjectId
}

export interface ICowOrder {
    paidAmount: number,
    cow: Types.ObjectId,
    buyer: Types.ObjectId,
    seller: Types.ObjectId
}