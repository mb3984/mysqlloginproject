import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import authRouter from "./routes/authRoutes.js";
const port = process.env.port || 2000;

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());
app.use("/auth", authRouter);
app.get("/", (req, res) => {
  console.log("req.body");
});

app.listen(port, () => {
  console.log(`Server is Running on ${port}`);
});
