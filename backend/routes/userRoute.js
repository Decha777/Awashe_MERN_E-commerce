const express = require("express");
const router = express.Router();
// Import userControllers
const { registerUser } = require("../controllers/userController");

router.route("/register").post(registerUser);

module.exports = router;
