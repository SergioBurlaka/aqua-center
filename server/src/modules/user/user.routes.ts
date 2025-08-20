import { Router } from "express"
import { validate } from "../../middleware/validate"
import { createUserSchema, updateUserSchema } from "./user.schema"
import * as UserController from "./user.controller"

const router = Router()

router.get("/", UserController.getAllUsers)
router.get("/:id", UserController.getUser)
router.post("/", validate(createUserSchema), UserController.createUser)
router.put("/:id", validate(updateUserSchema), UserController.updateUser)
router.delete("/:id", UserController.deleteUser)

export default router
