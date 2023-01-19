const exp = require("express");
const bp = require("body-parser");

const app = exp();

var newTasks = ["buyfood", "cookfood", "eatfood"];

app.set("view engine", "ejs");

app.use(bp.urlencoded({ extended: true }));
app.use(exp.static("public"));

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);
  res.render("list.ejs", { kindOfDay: day, newListItems: newTasks });
});

app.post("/", function (req, res) {
  var newTask = req.body.newtask;
  newTasks.push(newTask);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server running on port 3000");
});
