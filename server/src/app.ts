import cors from "cors";
import express from "express";
import userRoutes from "./modules/user/user.routes";
import workerRoutes from "./modules/worker/worker.routes";
import clientRoutes from "./modules/client/client.routes";
import projectRoutes from "./modules/project/project.routes";
import scheduleRoutes from "./modules/schedule/schedule.routes";
import irrigationProgramRoutes from "./modules/irrigation-program/irrigation-program.routes";

const app = express();

// Enable CORS for all origins (development)
app.use(cors());

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/workers", workerRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/schedules", scheduleRoutes);
app.use("/api/irrigation-programs", irrigationProgramRoutes);

export default app;
