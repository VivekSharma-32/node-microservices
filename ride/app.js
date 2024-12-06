require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const rideRoutes = require("./routes/ride.routes");
const connectDB = require("./db/db");
connectDB();
const RabbitMQ = require("./service/rabbit");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

RabbitMQ.connect();

app.use("/", rideRoutes);

module.exports = app;
