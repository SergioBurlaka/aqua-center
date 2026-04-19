import { Router } from "express"
import { getClientsFromAppSheet } from "./client.controller"

const router = Router()

router.get("/", getClientsFromAppSheet)

export default router

