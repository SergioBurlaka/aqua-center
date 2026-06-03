import { Router } from "express"
import { getProjectsByClientId } from "./project.controller"

const router = Router()

router.get("/", getProjectsByClientId)

export default router
