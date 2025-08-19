
import { pool } from "../../config/db.ts"
import { CreateUserInput, UpdateUserInput } from "./user.schema.ts"

export async function getUsers() {
  const { rows } = await pool.query("SELECT * FROM users ORDER BY id DESC")
  return rows
}

export async function getUserById(id: number) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id=$1", [id])
  return rows[0]
}

export async function createUser(data: CreateUserInput) {
  const { rows } = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [data.name, data.email]
  )
  return rows[0]
}

export async function updateUser(data: UpdateUserInput) {
  const { rows } = await pool.query(
    "UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *",
    [data.name, data.email, data.id]
  )
  return rows[0]
}

export async function deleteUser(id: number) {
  await pool.query("DELETE FROM users WHERE id=$1", [id])
}
