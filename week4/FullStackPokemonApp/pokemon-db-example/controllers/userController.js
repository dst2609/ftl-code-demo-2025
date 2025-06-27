const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, findUserByUsername, findUserById } = require('../models/userModel');

// Register User
const register = async (req, res) => {
  const { username, password } = req.body;
  console.log("register controller", { username, password });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(password, hashedPassword);
    const user = await createUser(username, hashedPassword);
    res.status(201).json(user);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error });
  }
};

//Login
const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      "secret-key" //setup env variable for secret key)
    );
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: "Invalid Credentials" });
  }
};

module.exports = {register, login}