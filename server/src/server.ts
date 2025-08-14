import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Middleware for JSON parsing
app.use(express.json());

// Example route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript + Node.js 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

