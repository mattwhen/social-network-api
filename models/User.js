const { Schema, model} = require('mongoose');

// Schema to create a User model
const userSchema = new Schema(
    // Configure individual properties using Schema Types
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        thoughts: [
            
        ],  
        friends: [

        ],
    });

// Compile our Schema into a Model
// Model is a class with which we contruct documents.
const User = mongoose.model('user', userSchema);

module.exports = User; 