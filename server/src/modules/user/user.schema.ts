import { z } from "zod"

export const createUserSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
})

export const updateUserSchema = z.object({
  id: z.number(),
  name: z.string().min(2).max(100).optional(),
  email: z.string().email().optional(),
})

export type CreateUserInput = z.infer<typeof createUserSchema>
export type UpdateUserInput = z.infer<typeof updateUserSchema>
