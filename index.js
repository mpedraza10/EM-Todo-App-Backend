// Imports
const express = require("express");
const cors = require("cors");

// DB
const connectDB = require("./data/database");

// Routes
const todoRoutes = require("./routes/todo.routes");

// Initialization
const app = express();
const PORT = process.env.PORT || 5001;

// Cors middleware
app.use(cors());

// Establish db connection
connectDB();

// Set how are we going to parse requests
app.use(express.urlencoded({ extended: false }));

// Middleware to allow ajax request parsed for json formats
app.use(express.json());

// Middleware to handle routes
app.use("/api", todoRoutes);

// Running
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
