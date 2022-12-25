//jshint esversion: 6

var exp = require("express");
var bp = require("body-parser");
var request = require("request");

const app = exp();

app.use(exp.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {});

app.listen(3000, function () {
  console.log("server is running");
});
