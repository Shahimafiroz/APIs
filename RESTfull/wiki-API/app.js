// require everything
const express = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
//express used
const app = express();
//body-parser used
app.use(bp.urlencoded({ extended: true }));
// Ejs used
app.set("view engine", "ejs");
// Mongoose Used
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/WikiDB", { useNewUrlParser: true });
/////////////////////////////////////////////////------Backend Begins--------///////////////////////////////////////////////////////////////////
//mongoose schema
const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});
//mongoose model
const article = mongoose.model("article", articleSchema);
//mongoose

app.use(express.static("public"));

app.listen(3000, function () {
  console.log("server is running");
});
