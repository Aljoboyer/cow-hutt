import {Request, Response} from 'express'
import { createCowService, getAllCow , getACow, deleteCow, updateCow, getCowByFiltering} from './cow.service'
import pick from '../../helper/pickHelper'
import { PaginationField } from '../../constants/paginationConstants'
import { cowOrderService } from '../users/user.service'


export const CreateCowController = async (req: Request, res: Response) => {

  const data = await createCowService(req.body)
  res.send({
    "success": true, 
    "statusCode":200,
    "message": "Cow created successfully",
    "data": data, 
  })
} 

export const getAllCowController = async (req: Request, res: Response) => {

  const data = await getAllCow()
  res.send(  {
    "success": true, 
    "statusCode":200,
    "message": "Cows retrieved successfully",
    "data": data, 
}
)
}

export const getSingleCow = async (req: Request, res: Response) => {

  const data = await getACow(req.params.id)

  res.send(  {
    "success": true, 
    "statusCode":200,
    "message": "Cow retrieved successfully",
    "data": data, 
  })

}

export const updateCowController = async (req: Request, res: Response) => {
  console.log(req.body, req.params.id)
  const data = await updateCow(req.body, req.params.id)
  res.send(  {
    "success": true, 
    "statusCode":200,
    "message": "Cow updated successfully",
    "data": data, 
}
)
}

export const deleteCowController = async (req: Request, res: Response) => {

  const data = await deleteCow(req.params.id)
  res.send(  {
    "success": true, 
    "statusCode":200,
    "message": "Cow deleted successfully",
    "data": data, 
}
)
}

export const CowFilterController = async (req: Request, res: Response) => {

  const filterOption = pick(req?.query, ["searchTerm"])
  const paginationOption  = pick(req.query, PaginationField)

    const reqult = await getCowByFiltering(filterOption,paginationOption)

    res.send(  {
      "success": true, 
      "statusCode":200,
      "message": "Cow deleted successfully",
      "data": reqult, 
    })
  }

export const CowOrderController = async (req: Request, res: Response) => {
      const OrderDetail = await cowOrderService(req.body)
  
      res.send(  {
        "success": true, 
        "statusCode":200,
        "message": "Cow deleted successfully",
        "data": OrderDetail, 
      })
    } 