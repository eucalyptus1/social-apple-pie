const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: {},
    username: {type: String, required: true},
    reactions: [reactionSchema],

    toJSON: {
        virtuals: true,
    },
    id: false,
})

const reactionSchema = new Schema({
    reactionId: {},
    reactionBody: {type: String, required: true, maxLength: 280},
    username: {type: String, required: true},
    createdAt: {}
    
    },

)

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = mongoose.model('thought', thoughtSchema);

module.exports = Thought;