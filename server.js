// import environment variables
require("dotenv").config();

const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT;

// initiate express app
const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(port, console.log(`express app running on port:${port}`));

// connect to mongodb
const mongoose = require("mongoose");

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("mongodb connected")
);
