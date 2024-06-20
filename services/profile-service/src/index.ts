import express from "express";
import dotenv from "dotenv";
import connectDB from "./db";
import profileRoutes from "./routes/profile";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

connectDB();

app.use("/api/profile", profileRoutes);

app.listen(port, () => {
  console.log(`Profile service running on port ${port}`);
});
