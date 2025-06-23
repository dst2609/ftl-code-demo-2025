require("dotenv").config(); // lets us use .env variables in our code
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const app = express();
const pokemonRoutes = require("./routes/pokemonRoutes");

const corsOption = {
  origin: "http://localhost:5173",
};

//Middleware
app.use(cors(corsOption));
app.use(morgan("dev"));
app.use(express.json());
app.use("/pokemon", pokemonRoutes);

const PORT = process.env.PORT; //port from .env file

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
