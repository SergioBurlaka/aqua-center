import cors from "cors";
import express from "express";
import userRoutes from "./modules/user/user.routes";

const app = express();

// Enable CORS for all origins (development)
app.use(cors());

app.use(express.json());

app.use("/api/users", userRoutes);

export default app;
