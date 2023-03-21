const exp = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = exp();

app.use(bp.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("server is running");
});
