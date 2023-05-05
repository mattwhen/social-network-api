const { Thought, User } = require('../models');

module.exports = {
	// GET all thoughts
	async getThoughts(req, res) {
		try {
			const thoughts = await Thought.find({});
			console.log('Our thoughts response object', thoughts);
			res.json(thoughts);
		} catch (err) {
			res.status(500).json('System error :(', err);
		}
	},
	// `GET` request to get a single thought by its `_id`
	async getSingleThought(req, res) {
		console.log('Here is our request!', req.params);
		try {
			const thoughts = await Thought.findOne({
				_id: req.params.thoughtId,
			}).select('-__v'); // "-__v" property is used to track the version of the document in the db.
			console.log('Our thoughts response object', thoughts);
			res.json(thoughts);

			if (!thoughts) {
				res.status(404);
			}
		} catch (err) {
			res.status(500).json('System error :(', err);
		}
	},

	/* POST request to create a new thought (don't forget to push the created thought's 
    _id to the associated user's thoughts array field) */
	async createThought(req, res) {
		try {
			const thoughts = await Thought.create(req.body);
			console.log('Our request to create a new thought', req.body);
			const user = await User.findOneAndUpdate(
				{ username: req.body.username },
				{ $push: { thoughts } }
			);
			res.json(thoughts);
		} catch (err) {
			res.status(500).json('System error :(', err);
		}
	},
	// PUT to update a thought by it's _id
	async updateThought(req, res) {
		try {
			const thoughts = await Thought.findOneAndUpdate(
				{ _id: req.params.thoughtId },
				{ $set: req.body },
				{ runValidators: true, new: true }
			);
			console.log('Here is my thoughts object', thoughts);
		} catch (err) {
			res.status(500).json('System error :(', err);
		}
	},
	// Delete to remove a thought by it's _id
	async deleteThought(req, res) {
		try {
			const thoughts = await Thought.findOneAndDelete({
				_id: req.params.thoughtId,
			});
		} catch (err) {
			res.status(500).json({ message: 'Could not delete thought' });
		}
	},
	// Create reaction stored in a single thought's reactions array field (POST)
	async createReaction({ params, body }, res) {
		// console.log('here is our request', { params, body });
		try {
			const reaction = await Thought.findOneAndUpdate(
				{ _id: params.thoughtId },
				{ $addToSet: { reactions: body } },
				{ new: true, runValidators: true }
			);
			// console.log('here is our reaction', reaction);
			if (!reaction) {
				res
					.status(404)
					.json({ message: 'No thoughts with this particular ID!' });
			}
      console.log('Added reaction');
			res.json(reaction);
		} catch (err) {
			res
				.status(400)
				.json('Failed to add reaction due to an internal error', err);
		}
	},
	// Delete to pull and remove a reaction by the reaction's reactionId value (DELETE)
	async deleteReaction({ params }, res) {
		try {
			const reaction = await Thought.findOneAndUpdate(
				{ _id: params.thoughtId },
				{ $pull: { reactions: params.reactionId } },
				{ new: true }
			);
      console.log('Removed friend')
		} catch (err) {
			res.status(500).json({ message: "Can't delete friend" });
		}
	},
};
