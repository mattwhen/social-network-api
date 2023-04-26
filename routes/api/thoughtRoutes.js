const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

// /api/thoughts
router.route('/').post(createThought);