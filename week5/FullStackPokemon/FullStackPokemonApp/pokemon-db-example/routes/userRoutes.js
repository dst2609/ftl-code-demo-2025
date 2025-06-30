const express = require("express");
const { register, login, getUserById } = require("../controllers/userController");
const authenticateToken = require('../middleware/auth');
console.log('getUserById type:', typeof getUserById);
console.log('authenticateToken type:', typeof authenticateToken);

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/:id", authenticateToken, getUserById);

module.exports = router;