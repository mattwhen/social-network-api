const mongoose = require("mongoose");
const User = require("./User");
const Thought = require("./Thought");
module.exports = { User, Thought };

new User({ name: "Matt", age: 28 });
