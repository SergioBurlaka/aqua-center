import { Router } from "express"
import { validate } from "../../middleware/validate.ts"
import { createUserSchema, updateUserSchema } from "./user.schema.ts"
import * as UserController from "./user.controller.ts"

const router = Router()

router.get("/", UserController.getAllUsers)
router.get("/:id", UserController.getUser)
router.post("/", validate(createUserSchema), UserController.createUser)
router.put("/:id", validate(updateUserSchema), UserController.updateUser)
router.delete("/:id", UserController.deleteUser)

export default router
