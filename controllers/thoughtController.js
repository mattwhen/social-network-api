const { Thought, User } = require("../models");

module.exports = {
  // GET all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find({});
      console.log(thoughts);
      res.json(thoughts);
    } catch (err) {
      res.status(500).json("System error :(", err);
    }
  },
  // `GET` request to get a single thought by its `_id`
  async getSingleThought(req, res) {
    try {
      const thoughts = await Thought.findOne({ _id: req.params.userId }).select(
        "-__v"
      ); // "-__v" property is used to track the version of the document in the db.
      res.json(thoughts);
      console.log(thoughts);

      if (!thoughts) {
        return res.status(404).json("No thoughts here...");
      }
    } catch (err) {
      res.status(500).json("System error :(", err);
    }
  },

  /* POST request to create a new thought (don't forget to push the created thought's 
    _id to the associated user's thoughts array field) */
  async createThought(req, res) {
    try {
      const thoughts = await Thought.create(req.body);
      res.json(thoughts);
      console.log(thoughts);
    } catch (err) {
      res.status(500).json("System error :(", err);
    }
  },
};
