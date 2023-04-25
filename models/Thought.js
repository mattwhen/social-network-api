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
            get() {

            } 
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {
            
        }
    }
);