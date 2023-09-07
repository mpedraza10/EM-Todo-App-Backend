// Imports
const express = require("express");

// Initialization
const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.get("/", (req, res) => {
	res.send("Conectado!");
});

// Running
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
