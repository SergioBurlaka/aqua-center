import { Router } from "express";
import { getIrrigationProgramByProgramId } from "./irrigation-program.controller";

const router = Router();

router.get("/", getIrrigationProgramByProgramId);

export default router;
