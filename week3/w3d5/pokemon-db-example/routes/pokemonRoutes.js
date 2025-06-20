// setup all routes

const express = require("express");
const router = express.Router();
const controller = require("../controllers/pokemonController");

router.get("/", controller.getAll);
// router.get("/:id", dosometing - arrow function)
// router.post("/", dosometing - arrow function)
// router.put("/:id", dosometing - arrow function)
// router.delete("/:id", dosometing - arrow function)

module.exports = router;
