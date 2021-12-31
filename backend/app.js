//  Custom modules
const ErrorHandler = require("./utils/errorHandler");

// start express
const express = require("express");
const app = express();
app.use(express.json());

// Import all routes
const user = require("./routes/userRoute");

app.use("/api/v1", user);

// Middlewares
app.use(ErrorHandler);
module.exports = app;
