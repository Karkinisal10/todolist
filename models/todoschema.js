const mongoose = require("mongoose");

const todoschema = new mongoose.Schema({
    todo :{
        type : String,
        required : true
       
    }
})


const todolist = new mongoose.model("todotask", todoschema)

module.exports = todolist;