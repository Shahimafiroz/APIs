const exp = require("express");
const bp = require("body-parser");

const app = exp();
var newtasks = [];
app.set("view engine", "ejs");

app.use(bp.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var today = new Date();
  var opt = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", opt);
  res.render("prac.ejs", { brumDay: day, items: newtasks });
});

app.post("/", function (req, res) {
  var newtask = req.body.task;
  newtasks.push(newtask);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server running");
});
