const asyncHandler = require("express-async-handler");
// Register a user
// POST /api/users/register
// public
const registerUser = asyncHandler( async (req, res) => {
    res.json({ message: "Register the user"});
})

// Register a user
// POST /api/users/login
// public
const loginUser = asyncHandler( async (req, res) => {
    res.json({ message: "Login User" });
})

// Current user profile
// POST /api/users/current
// private
const currentUser = asyncHandler( async (req, res) => {
    res.json({ message: "Current User Information" });
})

module.exports = { registerUser, loginUser, currentUser };