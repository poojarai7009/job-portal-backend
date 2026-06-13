const express = require("express");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Job Portal Backend is Running 🚀");
});

module.exports = app;