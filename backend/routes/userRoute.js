const express = require("express");
const router = express.Router();
// Import userControllers
const {
  registerUser,
  getUserDetails,
  loginUser,
} = require("../controllers/userController");
// auth routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
// admin routes
router.route("/admin/users/:id").get(getUserDetails);
module.exports = router;
