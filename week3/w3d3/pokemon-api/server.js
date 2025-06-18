// Initialize the server
const express = require("express");
const app = express(); //its gets all the express functions/functionalities in the app variable
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World, I am awake!");
});

app.listen(port, () => {
  console.log(`Server running at https://localhost:${port}`);
});
