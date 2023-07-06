import { ObjectId } from "mongodb";
import ApiError from "../../Errors/ApiError"
import { IUser } from "./user.interface";
import { User } from "./user.model";
import { Cow } from "../cow/cow.model";
import { CowOrderDetail } from "../cow/cow.order.model";

const createUser = async (user: IUser): Promise<IUser | null> => {
    const password = Math.random().toString(36).slice(-8);
    const postObj = {...user, password}
    const createdUser = await User.create(postObj)
    
    if(!createdUser?._id){
        throw new ApiError(400,"Failed to create user");
    }
    return createdUser
}

const getAllUser = async (): Promise<IUser[] | null> => {

    const allUser: any = await User.find({})
    
    if(allUser?.length == 0){
        throw new ApiError(400,"Failed to get all user");
    }
    return allUser
}

const getAUser = async (id: string): Promise<IUser[] | null> => {

    const user: any = await User.findOne({_id: new ObjectId(id)})
    
    if(user?._id == 0){
        throw new ApiError(400,"Failed to get single user");
    }
    return user
}

const deleteUser = async (id: string): Promise<IUser[] | null> => {

    const user: any = await User.deleteOne({_id: new ObjectId(id)})
    
    if(user?._id == 0){
        throw new ApiError(400,"Failed to delete cow");
    }
    return user
}

const updateUser = async (updateData: Object, id: string): Promise<void>=> {

    try{
        const user: any = await User.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: updateData },
          
            { new: true }
            )
            return user
    }
    catch(err){
        throw new ApiError(400,"Failed to update  user");
    }
   
}

const cowOrderService = async (orderBody: any): Promise<any> => {

    const buyerProfile: any = await User.findOne({_id: new ObjectId(orderBody.buyer)})
    const cowProfile: any = await Cow.findOne({_id: new ObjectId(orderBody.cow)})
    const sellerProfile: any = await User.findOne({_id: new ObjectId(cowProfile?.seller)})

    if(buyerProfile?.budget > cowProfile?.price){
        const cost = Number(buyerProfile?.budget) - Number(cowProfile?.price)
        const cows: any = await Cow.findOneAndUpdate(
            { _id: new ObjectId(orderBody.cow) },
            { $set: {label: 'sold out'} }
            )
        const user1: any = await User.findOneAndUpdate(
            { _id: new ObjectId(cowProfile?.seller) },
            { $set: {income: cowProfile?.price} }
            )
        const user2: any = await User.findOneAndUpdate(
            { _id: new ObjectId(orderBody.buyer) },
            { $set: {budget: Number(cost)} }
            )
        const orderObj = {
            paidAmount: cowProfile?.price,
            cow: orderBody.cow,
            buyer: orderBody.buyer,
            seller: cowProfile?.seller
        }
     const orders = await CowOrderDetail.create(orderObj)
     return orders
    }
    else{
        return {status: 400, message: 'You have not enough budget to buy'}
    }

}

export  {
    createUser,
    getAllUser,
    getAUser,
    deleteUser,
    updateUser,
    cowOrderService
}