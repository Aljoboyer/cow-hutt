import { ObjectId } from "mongodb";
import { Types } from "mongoose";

export interface IUser {
    phoneNumber: string,
    role: string, 
    password: string,
    name: {
        firstName: string,
        lastName: string,
    },
    address: string,
    budget: number,
    income: number,
    createdAt: string,
    updatedAt: string
}