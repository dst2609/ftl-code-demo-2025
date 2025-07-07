const express = require("express");
const router = express.Router();
const { createUserPokemon, getUserPokemon } = require("../controllers/UserPokemonController");
const authenticateToken = require("../middleware/auth");

router.post("/", authenticateToken, createUserPokemon);
router.get("/:userId", authenticateToken, getUserPokemon);

module.exports = router;

