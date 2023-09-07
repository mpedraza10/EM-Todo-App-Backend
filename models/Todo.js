// Imports
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
	name: String,
	completed: Boolean,
	date: {
		type: Date,
		default: Date.now(), // Sets default value to current date and time
	},
});

// Exports
module.exports = mongoose.model("Todo", todoSchema);
