const mongoose = require("mongoose");
const User = require("./User");
const Thought = require("./Thought");
const Reaction = require("./Reaction");
module.exports = { User, Thought, Reaction };

// new User({ name: "Matt", age: 28 });
