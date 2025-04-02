import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 2000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cors());

// Serve React frontend
if (process.env.NODE_ENV === "production") {
  const staticPath = path.resolve(__dirname, "../frontend/dist");
  app.use(express.static(staticPath));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(staticPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Development Mode: Server is running.");
  });
}
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
