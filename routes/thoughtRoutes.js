const router = require('express').Router();

const { getThought, getAllThoughts, createThought } = require('../controllers/thoughtControllers');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:id').get(getThought);

module.exports = router;