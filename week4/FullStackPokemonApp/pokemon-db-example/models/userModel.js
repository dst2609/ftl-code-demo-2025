const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUser = async (username, hashedPassword) => {
  return await prisma.user.create({
    data: { username, password: hashedPassword }
  });
};

const findUserByUsername = async (username) => {
  return await prisma.user.findUnique({
    where: { username }
  });
};

const findUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id }
  });
};

module.exports = { createUser, findUserById, findUserByUsername };