const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// GET all thoughts and create a new thought. 
router.route('/').get(getThoughts).post(createThought);;

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions')

router.route('/:thoughtId/reactions/:reactionId')

module.exports = router;