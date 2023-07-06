import { ObjectId } from "mongodb";
import ApiError from "../../Errors/ApiError"
import { ICow } from "./cow.interface";
import { Cow } from "./cow.model";
import { PaginationCalculate } from "../../helper/paginationHelper";


const createCowService = async (cow: ICow): Promise<ICow | null> => {

    const createCow = await Cow.create(cow)
    
    if(!createCow){
        throw new ApiError(400,"Failed to create cow");
    }
    return createCow
}

const getAllCow = async (): Promise<ICow[] | null> => {

    const allCow: any = await Cow.find({})
    
    if(allCow?.length == 0){
        throw new ApiError(400,"Failed to get all cow");
    }
    return allCow
}

const getACow = async (id: string): Promise<ICow[] | null> => {

    const cows: any = await Cow.findOne({_id: new ObjectId(id)})
    
    if(cows?._id == 0){
        throw new ApiError(400,"Failed to get cow");
    }
    return cows
}

const updateCow = async (updateData: Object, id: string): Promise<void>=> {

    try{
        const cows: any = await Cow.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: updateData },
          
            { new: true }
            )
            return cows
    }
    catch(err){
        throw new ApiError(400,"Failed to update  user");
    }
   
}

const deleteCow = async (id: string): Promise<ICow[] | null> => {

    const cows: any = await Cow.deleteOne({_id: new ObjectId(id)})
    
    if(cows?._id == 0){
        throw new ApiError(400,"Failed to delete cow");
    }
    return cows
}

 const getCowByFiltering = async (filterOption: any, paginationOption: any): Promise<any> => {

    const {searchTerm} = filterOption

    const searchCondition = [
        {
            $or: [
                {
                    title: {
                        $reges: searchTerm,
                        $options: 'i'
                    }
                },
                {
                    code: {
                        $reges: searchTerm,
                        $options: 'i'
                    }
                },
                {
                    year: {
                        $reges: searchTerm,
                        $options: 'i'
                    }
                }
            ]
        }
    ]
    const {page, limit, skip, srotBy, sortOrder} = PaginationCalculate(paginationOption);

    const sortOption = {}
    if(srotBy && sortOrder){
        sortOption[srotBy] = sortOrder
    }
    const result = await Cow.find({}).sort(sortOption).skip(skip).limit(limit)

    const total = await Cow.countDocuments()
    return {
        page,
        limit,
        data: result,
        totalNumberOfData: total
    }
}

export  {
    createCowService,
    getAllCow,
    getACow,
    deleteCow,
    updateCow,
    getCowByFiltering,
    
}