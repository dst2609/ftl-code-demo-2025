// controller file for pokemon routes

const prisma = require("../models/prismaClient");

//GET /pokemon
exports.getAll = async (req, res) => {
  const pokemons = await prisma.pokemon.findMany(); //syntax - prisma get all pokemon
  res.json(pokemons);
};
