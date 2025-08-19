import { ZodObject, ZodRawShape } from "zod"
import { Request, Response, NextFunction } from "express"

export const validate =
  (schema: ZodObject<ZodRawShape>) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body)
      next()
    } catch (e: any) {
      return res.status(400).json({ error: e.errors })
    }
  }
