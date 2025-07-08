const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const { rateLimiter } = require("./utlis/security");
const chatRoutes = require("./routes/chatRoutes");

// Middleware initialization
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//use rate limiter here
app.use(rateLimiter);

app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("Wassup");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
