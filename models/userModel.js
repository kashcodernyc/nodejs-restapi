const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"]
    },
    email: {
        type: String,
        required: [true, "Please enter a validemail address"],
        unique: [true, "Email address is already in use"]
    },
    password: {
        type: String,
        required: [true, "Please enter a valid password"]
    }
},
{
    timestamp: true,
})

module.exports = mongoose.model("User", userSchema);
