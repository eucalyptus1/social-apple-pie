const { Thought, User } = require('../models');

const thoughtControllers = {
    getThought(req, res) {
    
        Thought.findOne({ _id: req.params.thoughtId })
        .then((thought) => res.json(thought))
    },

    getAllThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))

    },

    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => {
        
            return User.findOneAndUpdate(
                { _id: User.body.userId }
                )
        })
    }
    
}

module.exports = thoughtControllers;