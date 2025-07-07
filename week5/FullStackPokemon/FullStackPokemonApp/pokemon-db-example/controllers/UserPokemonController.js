const {
  createUserPokemon,
  findUserPokemonByUserId
} = require("../models/userPokemonModel");

/**
 * POST /user/pokemon
 * Create a new Pokémon entry for the authenticated user.
 * Requires `pokemonId` in the request body and token in Authorization header.
 */
exports.createUserPokemon = async (req, res) => {
  try {
    const { pokemonId } = req.body;
    const userId = req.user.userId;

    // Validate input
    if (!pokemonId) {
      return res.status(400).json({ error: "Missing pokemonId." });
    }

    const newUserPokemon = await createUserPokemon(userId, pokemonId);
    return res.status(201).json(newUserPokemon);
  } catch (error) {
    console.error("Error in createUserPokemon:", error);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
};

/**
 * GET /user/pokemon
 * Retrieve all Pokémon entries for the authenticated user.
 */
exports.getUserPokemon = async (req, res) => {
  try {
    const userId = req.user.userId;

    const userPokemons = await findUserPokemonByUserId(userId);
    return res.status(200).json(userPokemons);
  } catch (error) {
    console.error("Error in getUserPokemon:", error);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
};
