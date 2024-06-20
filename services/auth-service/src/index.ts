import express from "express";
import dotenv from "dotenv";
import connectDB from "./db";
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Authentication service running on port ${port}`);
});
