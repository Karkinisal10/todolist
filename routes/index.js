const router = require("express").Router();
const path = require("path");
const todos = require("../models/todoschema");

router.get("/", async (req, res) => {
  try {
    // Fetch all todos from the database
    const allTodos = await todos.find();

    // Render the index view and pass the fetched todos to it
    res.render("index", { todos: allTodos });
  } catch (error) {
    // Handle errors
    console.log(error);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});


module.exports = router;
