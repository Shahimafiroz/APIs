const exp = require("express");
const bp = require("body-parser");
const app = exp();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);
  res.render("list.ejs", { kindOfDay: day });
});

app.listen(3000, function () {
  console.log("server running on port 3000");
});
