import pool from "../../config/db"

export type WorkerRow = {
  id: number
  name: string
  email: string
  password: string
  role_id: number
  brigade_id: number
}

export async function findWorkerByEmail(email: string): Promise<WorkerRow | null> {
  const { rows } = await pool.query<WorkerRow>(
    "SELECT id, name, email, password, role_id, brigade_id FROM workers WHERE email=$1",
    [email]
  )
  return rows[0] ?? null
}


