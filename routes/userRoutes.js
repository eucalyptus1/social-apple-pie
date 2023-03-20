const router = require('express').Router();

const { getUser, getAllUsers, createUser } = require('../controllers/userControllers');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUser);

module.exports = router;