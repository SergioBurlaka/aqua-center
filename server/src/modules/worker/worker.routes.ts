import { Router } from "express"
import { login } from "./worker.controller"

const router = Router()

router.post("/login", login)

export default router


