const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
    storyName: {
        type: String,
        required: true,
        unique: true,
    },
    ownBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    audio: [
        {
            audioUrl: {
                type: String,
                required: false
            },
            Name: {
                type: String,
                required: false
            },
            duration: {
                type: String,
                required: false
            }
        }
    ],
    storyProfile: {
        type: String,
        default: "",
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Story",
            default: [],
        },
    ],
},
    { timestamps: true }
)

const Story = mongoose.model("Story", storySchema);

module.exports = Story;