//  Custom modules
const ErrorMiddleWares = require("./middlewares/errors");
// start express
const express = require("express");
const app = express();
app.use(express.json());

// Import all routes
const user = require("./routes/userRoute");

app.use("/api/v1", user);

// Middlewares
app.use(ErrorMiddleWares);
// app.use(ErrorHandler);
module.exports = app;
