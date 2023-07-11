import {Request, Response} from 'express'
import { createAdmin, loginAdmin } from './admin.service'

export const CreateAdminController = async (req: Request, res: Response) => {

  const data = await createAdmin(req.body)
  res.send(data)
}

export const adminLoginController = async (req: Request, res: Response) => {

  const data = await loginAdmin(req.body)
  const {refreshToken, ...otherData} = data
  const cookieOptions = {secure: false, httpOnly: true}

  res.cookie('refreshToken', refreshToken, cookieOptions)
  res.send(otherData)
}