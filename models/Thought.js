const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, },
    createdAt: {},
    username: {type: String, required: true},
    reactions: [],

    toJSON: {
        virtuals: true,
    },
    id: false,
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = mongoose.model('thought', thoughtSchema);

module.exports = Thought;