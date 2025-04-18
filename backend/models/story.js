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
            file: {
                type: String,
                required: false // or true if it's mandatory
            },
            duration: {
                type: Number,
                required: false
            }
        }
    ],
    profileImg: {
        type: String,
        default: "",
    },
    story: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Story",
            default: [],
        },
    ],
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