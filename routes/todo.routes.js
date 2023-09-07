// Imports
const express = require("express");

// Controller
const todoController = require("../controllers/todo.controller");

// Router
const router = express.Router();

// Routes
router.get("/todos", todoController.getTodos);

router.post("/todos", todoController.createTodo);

router.put("/todos/:todoId", todoController.updateTodo);

router.delete("/todos/:todoId", todoController.deleteTodo);

// Exports
module.exports = router;
