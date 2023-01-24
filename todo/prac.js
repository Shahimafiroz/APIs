var exp = require("express");
var bp = require("body-parser");

const app = exp();

app.get("/", function (req, res) {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var today = new Date();
  var dateFormat = today.toLocaleDateString("en-US", options);
  res.render;
});

app.listen(3000, function () {
  console.log("server running on port 3000");
});
