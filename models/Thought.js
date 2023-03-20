const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, },
    createdAt: {},
    username: {type: String, required: true},
    reactions: []
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;