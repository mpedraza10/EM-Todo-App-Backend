// Model
const Todo = require("../models/Todo");

// Functions

// GET
const getTodos = async (req, res) => {
	try {
		// Get the todos using mongoose find()
		const todos = await Todo.find();

		// Send back in the response the correct status
		res.status(200).json(todos);
	} catch (error) {
		// Send back in the response the fail status and log error
		console.log(error);
		res.status(500).json({ error: "Server error" });
	}
};

// POST
const createTodo = async (req, res) => {
	try {
		// Get data from the request body
		const { text, completed } = req.body;

		// Create a new model instance
		const newTodo = new Todo({ text, completed });

		// Save the todo in the db using mongoose save()
		await newTodo.save();

		// Send back in the response the correct status
		res.status(201).json(newTodo);
	} catch (error) {
		// Send back in the response the fail status and log error
		console.log(error);
		res.status(500).json({ error: "Server error" });
	}
};

// PUT

// DELETE

// Exports
module.exports = {
	getTodos: getTodos,
	createTodo: createTodo,
};
