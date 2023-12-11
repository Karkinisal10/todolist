const router = require("express").Router();
const path = require("path");
const todos = require("../models/todoschema");

router.post("/todoclick", async (req, res) => {
  try {
    const newTodo = req.body.newTodo;

    const todolist = new todos({
      todo: newTodo // Use 'todo' field name as defined in your schema
    });

    const savedData = await todolist.save();

    // Send a success response back to the client
    res.redirect("/");
    //res.redirect("index");
  } catch (error) {
    // Log the error for debugging
    console.log(error);

    // Send an error response back to the client
    res.status(500).json({ error: "Failed to save todo" });
  }
});

module.exports = router;
