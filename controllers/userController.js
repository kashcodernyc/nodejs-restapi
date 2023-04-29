const asyncHandler = require("express-async-handler");
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// Register a user
// POST /api/users/register
// public
const registerUser = asyncHandler( async (req, res) => {
    const { username, email, password } = req.body;
    if( !username || !email || !password ){
        res.status(400);
        throw new Error("All field are required!")
    }
    const userAvailable = await User.findOne({ email });
    if(userAvailable){
        throw new Error("User already registered")
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword});

    console.log(`User created ${user}`);

    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(400);
        throw new error("User data is not valid");
    }

    res.json({ message: "You are registered!"});
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