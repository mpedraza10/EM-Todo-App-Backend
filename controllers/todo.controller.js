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
const updateTodo = async (req, res) => {
	try {
		// Get data from the request body and todo id
		const { text, completed } = req.body;
		const todoId = req.params.todoId;

		// Find the task by ID and update its properties
		const updatedTodo = await Todo.findByIdAndUpdate(
			todoId,
			{ text, completed },
			{ new: true }
		);

		// If we don't find a todo we return 404 and not found
		if (!updatedTodo) {
			return res.status(404).json({ error: "Todo not found" });
		}

		// Send back in the response the correct status
		res.status(200).json(updatedTodo);
	} catch (error) {
		// Send back in the response the fail status and log error
		console.log(error);
		res.status(500).json({ error: "Server error" });
	}
};

// DELETE
const deleteTodo = async (req, res) => {
	try {
		// Get todo id from params
		const todoId = req.params.todoId;

		// Find the task by ID and delete it
		const deletedTodo = await Todo.findByIdAndDelete(todoId);

		// If we didn't find
		if (!deletedTodo) {
			return res.status(404).json({ error: "Todo not found" });
		}

		// Send back in the response the correct status
		res.status(200).json({ success: "Deleted successfully" });
	} catch (error) {
		// Send back in the response the fail status and log error
		console.log(error);
		res.status(500).json({ error: "Server error" });
	}
};

// Exports
module.exports = {
	getTodos: getTodos,
	createTodo: createTodo,
	updateTodo: updateTodo,
	deleteTodo: deleteTodo,
};
