import { Router } from "express";
import { getSchedulesByProjectId } from "./schedule.controller";

const router = Router();

router.get("/", getSchedulesByProjectId);

export default router;
