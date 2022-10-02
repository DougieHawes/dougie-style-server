import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();

const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT;

app.use(express.json());

mongoose
  .connect(mongoUri)
  .then(() =>
    app.listen(port, () => {
      if (port !== undefined) {
        console.log(`express app running on port:${port}`);
      } else {
        console.log("port not found");
      }
    })
  )
  .catch((error) => console.log(error.message));

app.use("/auth", authRoutes);
app.use("/product", productRoutes);
app.use("/user", userRoutes);
