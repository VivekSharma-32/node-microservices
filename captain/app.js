require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const captainRoutes = require("./routes/captain.routes");
const connectDB = require("./db/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();

app.use("/", captainRoutes);

module.exports = app;
