const express = require("mongoose");
express
  .connect("mongodb://localhost:27017/TODODb")
  .then(() => {
    console.log("connected to database!");
  })
  .catch(() => {
    console.log("error while connecting!!");
  });
