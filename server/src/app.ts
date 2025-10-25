import cors from "cors";
import express from "express";
import userRoutes from "./modules/user/user.routes";
import workerRoutes from "./modules/worker/worker.routes";

const app = express();

// Enable CORS for all origins (development)
app.use(cors());

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/workers", workerRoutes);

export default app;
