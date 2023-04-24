const { Schema, model } = require("mongoose");

// Schema to create a User model
const userSchema = new Schema(
  // Configure individual properties using Schema Types
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // thoughts: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Thought",
    //   },
    // ],
    // friends: [
    //   {
    //     type: Schema.Types.ObjectId,
    //   },
    // ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }, 
);
// Create a virtual called friendCount that retrieves the 
// length of the user's friends array field on query.
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.friends.length}`;
  })

// Compile our Schema into a Model
// Model is a class with which we contruct documents.
const User = model("user", userSchema);

module.exports = User;
