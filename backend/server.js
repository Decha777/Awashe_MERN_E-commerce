const app = require("./app");
const connectDatabase = require("./config/DB");

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR:${err.stack}`);
  console.log(`Shutting down due to uncaught exception`);
  process.exit(1);
});

// Configure Enviroment variables
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "backend/config/config.env" });

// Database Connection
connectDatabase();

// Create server
const port = process.env.PORT || 4000;
const host = `http://localhost:${port}`;
const server = app.listen(port, () => {
  console.log(`Server is running on ${host} `);
});

// Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${(err, stack)}`);
  console.log(`Shutting down the server due to Unhandled Promise rejection.`);
  server.close(() => {
    process.exit(1);
  });
});
