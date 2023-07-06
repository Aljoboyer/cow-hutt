import {Request, Response} from 'express'
import { createUser, deleteUser, getAUser, getAllUser, updateUser } from './user.service'

export const CreateUserController = async (req: Request, res: Response) => {

  const data = await createUser(req.body)
  res.send({
    "success": true, 
    "statusCode":200,
    "message": "User created successfully",
    "data": data, 
})
  
}

export const getAllUserController = async (req: Request, res: Response) => {

  const data = await getAllUser()
  res.send(  {
    "success": true, 
    "statusCode":200,
    "message": "Users retrieved successfully",
    "data": data, 
}
)
}

export const getSingleUser = async (req: Request, res: Response) => {

  const data = await getAUser(req.params.id)
  res.send(  {
    "success": true, 
    "statusCode":200,
    "message": "Users retrieved successfully",
    "data": data, 
}
)
}

export const updateUserController = async (req: Request, res: Response) => {

  const data = await updateUser(req.body, req.params.id)
  res.send(  {
    "success": true, 
    "statusCode":200,
    "message": "Users updated successfully",
    "data": data, 
}
)
}

export const deleteUserController = async (req: Request, res: Response) => {

  const data = await deleteUser(req.params.id)
  res.send(  {
    "success": true, 
    "statusCode":200,
    "message": "Users deleted successfully",
    "data": data, 
}
)
}