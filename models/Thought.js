const { Schema, model } = require("mongoose");
const formatDate = require("../utils/dateFormat");
const reactionSchema = require('./Reaction');

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
            get: formatDate, // Use a getter method to format the timestamp on query.
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema], // Array of nested documents created with the reactionSchema
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

/* Create a virtual called reactionCount that retrieves 
the length of the thought's reactions array field on query. */
// Think of this as a 'virutal' column that is created after defining our fields in the Schema.
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length; 
});

// Compile our Schema into a Model and name it 'thought' 
// Model is a class with which we construct documents.
const Thought = model('thought', thoughtSchema);

module.exports = Thought;