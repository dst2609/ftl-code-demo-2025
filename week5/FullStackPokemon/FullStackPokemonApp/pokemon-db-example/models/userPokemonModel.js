const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUserPokemon = async (userId, pokemonId) => {
  return await prisma.userPokemon.create({
    data: { userId, pokemonId },
  });
};

const findUserPokemonByUserId = async (userId) => {
  return await prisma.userPokemon.findMany({
    where: { userId },
  });
};

module.exports = { createUserPokemon, findUserPokemonByUserId };