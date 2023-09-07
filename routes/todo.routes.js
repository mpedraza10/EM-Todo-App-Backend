// Imports
const express = require("express");

// Controller
const todoController = require("../controllers/todo.controller");

// Router
const router = express.Router();

// Routes
router.get("/todos", todoController.getTodos);

router.post("/todos", todoController.createTodo);

// Exports
module.exports = router;
