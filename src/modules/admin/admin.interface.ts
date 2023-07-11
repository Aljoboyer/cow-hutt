import { ObjectId } from "mongodb";
import { Types } from "mongoose";

export interface IAdmin {
    phoneNumber: string
    role: string
    password: string
    name: {
        firstName: string,
        lastName: string,
    },
    address: string
    createdAt: string
    updatedAt: string
}