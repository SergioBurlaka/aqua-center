import pool from "../../config/db"

export type WorkerRow = {
  id: number
  name: string
  email: string
  password: string
  role_id: number
  brigade_id: number
  role: string
}

export async function findWorkerByEmail(email: string): Promise<WorkerRow | null> {
  const { rows } = await pool.query<WorkerRow>(
    `SELECT w.id, w.name, w.email, w.password, w.role_id, w.brigade_id, r.role AS role
     FROM workers w
     JOIN roles r ON r.id = w.role_id
     WHERE w.email = $1`,
    [email]
  )
  return rows[0] ?? null
}


