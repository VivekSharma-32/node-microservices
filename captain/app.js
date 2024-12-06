require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const captainRoutes = require("./routes/captain.routes");
const connectDB = require("./db/db");
const RabbitMQ = require("./service/rabbit");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();

RabbitMQ.connect();

app.use("/", captainRoutes);

module.exports = app;
