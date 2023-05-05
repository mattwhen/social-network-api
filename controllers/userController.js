const { User, Thought } = require("../models");

module.exports = {
  // Get all users (GET)
  async getUsers(req, res) {
    try {
      const users = await User.find().populate("friends");
      console.log(users);
      if(!users) {
        res.status(404).json({message: "No users found..."});
      }
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    } debugger;
  },
  // Get a single user by ID (GET)
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a new user (POST)
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json('Failed to create user due to an internal server error', err);
    }
  },
  // Update a user by ID (PUT)
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json('Failed to update user due to an internal server error', err);
    }
  },
  // Delete a user by id AND it's associated thoughts (DELETE)(BONUS)
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user)
        return res.status(404).json({ message: "No user with that ID" });

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: "User and associated thoughts deleted!" });
    } catch (err) {
      res.status(500).json({ message: "Couldn't delete user" });
    }
  },
  // Add a new friend to a user's friend list (POST)
  async addFriend({ params }, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: params.userId },
        { $addToSet: { friends: params.friendId } },
        { new: true, runValidators: true }
      );
      console.log('Added friend to friends list!')
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: "Can't add friend" });
    }
  },
  // Delete a friend from a user's friend list (DELETE)
  async deleteFriend({ params }, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } },
        { new: true }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: "Can't delete friend" });
    }
  },
};
