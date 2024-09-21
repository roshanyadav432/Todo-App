const mongoose = require("mongoose");

const MySchema = new mongoose.Schema({
  work: String,
  date: String,
});

const MyModel = new mongoose.model("todos", MySchema);

module.exports = MyModel;
