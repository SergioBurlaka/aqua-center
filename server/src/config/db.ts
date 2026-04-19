import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
dotenv.config({ path: "src/.env" });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
  console.log("✅ Connected to PostgreSQL database");
});

export default pool;
