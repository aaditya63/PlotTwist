const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 6,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
        photo: {
			type: String,
			default: "",
		},
		followers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
				default: [],
			},
		],
		following: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
				default: [],
			},
		],
        story: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Story",
				default: [],
			},
		],
		likedStory: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Story",
				default: [],
			},
		],
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;