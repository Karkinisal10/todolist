const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const hbs = require("hbs");

const app = express();

//models todoschema
const todos = require("./models/todoschema");

//creating mongodb connection
mongoose.connect('mongodb://127.0.0.1:27017/todolist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


  //middlewares
  app.use(express.urlencoded({extended : true}));

  
  //for static path
  const static_path = path.join(__dirname,"./public")
  app.use(express.static(static_path));


  //
 const template_path = path.join(__dirname,"./template/views");
 const partials_path = path.join(__dirname,"./template/partials");

  //set view engine
  app.set("view engine", 'hbs');
  app.set("views", template_path);
  hbs.registerPartials(partials_path);


  //routes

app.use(require("./routes/index"));
app.use(require("./routes/todo"))



app.listen(80,() => {
    console.log("Lisening on port 80");
})