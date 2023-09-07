// Imports
const express = require("express");

// DB
const connectDB = require("./data/database");

// Initialization
const app = express();
const PORT = process.env.PORT || 5001;

// Establish db connection
connectDB();

// Set how are we going to parse requests
app.use(express.urlencoded({ extended: false }));

// Running
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
