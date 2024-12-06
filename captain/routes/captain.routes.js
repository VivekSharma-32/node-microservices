const express = require("express");
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", captainController.register);
router.post("/login", captainController.login);
router.get("/logout", captainController.logout);
router.get("/profile", authMiddleware.captainAuth, captainController.profile);

module.exports = router;
