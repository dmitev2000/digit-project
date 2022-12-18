import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import productRouter from "./routes/productRoutes.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cardRouter from "./routes/cardRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/products", productRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/cards", cardRouter);
app.use("/orders", orderRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  let errorMessage;
  if (
    err.message
      .toString()
      .includes("is shorter than the minimum allowed length")
  ) {
    errorMessage = "Username must be at least 5 characters long.";
  } else errorMessage = err.message || "Something went wrong.";
  return res.status(errorStatus).json(errorMessage);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
