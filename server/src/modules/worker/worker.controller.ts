import { Request, Response } from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { workerLoginSchema } from "./worker.schema"
import { findWorkerByEmail } from "./worker.model"

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = workerLoginSchema.parse(req.body)

    const worker = await findWorkerByEmail(email)
    if (!worker) return res.status(401).json({ error: "Invalid credentials" })

    const ok = await bcrypt.compare(password, worker.password)
    if (!ok) return res.status(401).json({ error: "Invalid credentials" })

    const secret = process.env.JWT_SECRET
    if (!secret) return res.status(500).json({ error: "JWT secret not configured" })

    const token = jwt.sign(
      { sub: worker.id, email: worker.email, roleId: worker.role_id },
      secret,
      { expiresIn: "7d" }
    )

    return res.json({
      token,
      worker: {
        id: worker.id,
        name: worker.name,
        email: worker.email,
        roleId: worker.role_id,
        brigadeId: worker.brigade_id,
      },
    })
  } catch (e: any) {
    if (e?.errors) return res.status(400).json({ error: e.errors })
    return res.status(500).json({ error: "Unexpected error" })
  }
}


