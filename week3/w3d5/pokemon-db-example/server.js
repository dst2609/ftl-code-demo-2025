require("dotenv").config(); // lets us use .env variables in our code

const express = require("express");
const morgan = require("morgan");
const app = express();
const pokemonRoutes = require("./routes/pokemonRoutes");

app.use(morgan("dev"));
app.use(express.json());
app.use("/pokemon", pokemonRoutes);

const PORT = process.env.PORT; //port from .env file

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
