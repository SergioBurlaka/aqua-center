import { z } from "zod"

export const workerLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(255),
})

export type WorkerLoginInput = z.infer<typeof workerLoginSchema>


