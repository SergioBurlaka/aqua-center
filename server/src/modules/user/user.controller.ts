import { Request, Response } from "express"
import * as UserModel from "./user.model.ts"

export const getAllUsers = async (_: Request, res: Response) => {
  const users = await UserModel.getUsers()
  res.json(users)
}

export const getUser = async (req: Request, res: Response) => {
  const user = await UserModel.getUserById(Number(req.params.id))
  if (!user) return res.status(404).json({ error: "User not found" })
  res.json(user)
}

export const createUser = async (req: Request, res: Response) => {
  const user = await UserModel.createUser(req.body)
  res.status(201).json(user)
}

export const updateUser = async (req: Request, res: Response) => {
  const user = await UserModel.updateUser({ ...req.body, id: Number(req.params.id) })
  res.json(user)
}

export const deleteUser = async (req: Request, res: Response) => {
  await UserModel.deleteUser(Number(req.params.id))
  res.status(204).send()
}
