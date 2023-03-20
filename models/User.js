const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trim: true},
    email: { type: String, required: true, unique: true},
    thoughts: [],
    friends: []

});

const User = model('user', userSchema);

module.exports = User;