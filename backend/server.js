const express = require("express");
const app = express();
const router = require("./route/router");

const mogo = require("mongodb");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/event_calender");

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Database Connection Successful!");
});

app.use("/", router);
app.listen(process.env.PORT || 3001, function() {
  console.log("Server is listening on port 3001. Ready to accept requests!");
});
