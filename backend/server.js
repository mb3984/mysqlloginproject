import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";

// Load environment variables
dotenv.config();

const port = process.env.PORT || 2000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Backend API Routes
app.use("/auth", authRouter);

// Serve Frontend Static Files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.join(__dirname, "../frontend/dist");

app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start Server
app.listen(port, () => {
  console.log(`✅ Server is Running on port ${port}`);
});
