const { User } = require('../models');

const userControllers = {
    getUser(req, res) {

        User.findOne({_id: req.params.userId} )
        .select('-__v')
        .then((user) => res.json(user))
    },

    getAllUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
    },

    createUser(req, res) {
        User.create(req.body)
        .then((userData) => res.json(userData))
    }
}

module.exports = userControllers;