const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trim: true},
    email: { type: String, required: true, unique: true},
    thoughts: [],
    friends: [],

    toJSON: {
        virtuals: true,
    },
    id: false,


    
});

userSchema.virtual('friendCount').get(function() {
    return this.friend.length;
});

const User = mongoose.model('user', userSchema);

module.exports = User;