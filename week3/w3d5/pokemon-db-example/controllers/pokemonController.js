// controller file for pokemon routes

const prisma = require("../models/prismaClient");

//GET /pokemon
exports.getAll = async (req, res) => {
  const pokemons = await prisma.pokemon.findMany(); //syntax - prisma get all pokemon
  res.json(pokemons);
};

//GET /pokemon/:id
exports.getById = async (req, res) => {
  const id = Number(req.params.id); //get id as number from the params
  const pokemon = await prisma.pokemon.findUnique({ where: { id } });
  if (!pokemon) return res.status(404).json({ error: "Not found!" });
  res.json(pokemon);
};

// POST /pokemon
exports.create = async (req, res) => {
  const { name, type, description } = req.body;
  const newPokemon = await prisma.pokemon.create({
    data: { name, type, description },
  });
  res.status(201).json(newPokemon);
};

//PUT /pokemon/:id
exports.update = async (req, res) => {
  const id = Number(req.params.id);
  const { name, type, description } = req.body;
  const updatedPokemon = await prisma.pokemon.update({
    where: { id },
    data: { name, type, description },
  });
  res.json(updatedPokemon);
};

//DELTE /pokemon/:id
exports.remove = async (req, res) => {
  const id = Number(req.params.id);
  await prisma.pokemon.delete({ where: { id } });
  res.status(204).end();
};
