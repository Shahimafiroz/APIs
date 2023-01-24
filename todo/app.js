const exp = require("express");
const bp = require("body-parser");
const date = require(__dirname + "/date.js");

const app = exp();
console.log(date);
var newTasks = ["buyfood", "cookfood", "eatfood"];
var newWorkTasks = [];
var Acts = [];

app.set("view engine", "ejs");

app.use(bp.urlencoded({ extended: true }));
app.use(exp.static("public"));

app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list.ejs", { listTitle: day, newListItems: newTasks });
});

app.post("/", function (req, res) {
  var newTask = req.body.newtask;
  // console.log(req.body);
  if (req.body.list === "Work List") {
    newWorkTasks.push(newTask);
    res.redirect("/work");
  } else if (req.body.list === "Play Time") {
    Acts.push(newTask);
    res.redirect("/play");
  } else {
    newTasks.push(newTask);
    res.redirect("/");
  }
});

app.listen(3000, function () {
  console.log("server running on port 3000");
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: newWorkTasks });
});

app.post("/work", function (req, res) {
  var newWorkTask = req.body.newtask;
  newWorkTasks.push(newWorkTask);
  res.redirect("/work");
});

app.get("/play", function (req, res) {
  res.render("list", { listTitle: "Play Time", newListItems: Acts });
});

app.post("/play", function (req, res) {
  var act = req.body.newtask;
  Acts.push(act);
  res.redirect("/body");
});

app.get("/about", function (req, res) {
  res.render("about");
});
