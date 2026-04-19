import app from "./app"
import dotenv from "dotenv"

dotenv.config()
dotenv.config({ path: "src/.env" })

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
