require("dotenv").config(); // lets us use .env variables in our code

const express = require("express");
const app = express();

app.use(express.json());
const PORT = process.env.PORT; //port from .env file

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
