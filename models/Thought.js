const { Schema, model } = require("mongoose");

// Schema to create a Thought model 
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            timestamp: true,
            get: function dateFormat(timestamp) {

            },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false, /* When set to false, you are telling Mongoose to NOT 
                     create an _id field for your documents */
    }
);