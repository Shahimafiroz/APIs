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
const Article = mongoose.model("Article", articleSchema);
// GET in REST (getting all the articles)

// app.get("/articles", function (res, req) {
//   Article.find(function (err, foundArticles) {
//     // res.send(foundArticles);
//     console.log(foundArticles);
//   });
// });

app.get("/articles", async function (req, res) {
  try {
    const foundArticles = await Article.find();
    console.log(foundArticles);
    res.send(foundArticles);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});


/////////////////////////////////////////////////////////////////////////
app.use(express.static("public"));

app.listen(3000, function () {
  console.log("server is running");
});
