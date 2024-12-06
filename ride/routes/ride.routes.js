const express = require("express");
const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create-ride", authMiddleware.userAuth, rideController.createRide);
router.put(
  "/accept-ride",
  authMiddleware.captainAuth,
  rideController.acceptRide
);

module.exports = router;
