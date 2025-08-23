import cors from "cors";
import express from "express";
import userRoutes from "./modules/user/user.routes";

const app = express();

// Enable CORS for all origins (development)
app.use(cors());

app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

export default app;
