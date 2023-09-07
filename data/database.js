// Imports
const mongoose = require("mongoose");

// Connection
const connectDB = async () => {
	try {
		await mongoose.connect("mongodb://localhost/mern-todo-app", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB connected!");
	} catch (error) {
		console.log(`MongoDB connection error: `, error);
		process.exit(1); // Exit the process on db connection failure
	}
};

module.exports = connectDB;
