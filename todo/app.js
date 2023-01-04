const exp = require("express");
const bp = require("body-parser");
const app = exp();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var currentDate = today.getDay();
  var day = "";

  if (currentDate === 0) {
    day = " Sunday ";
  } else if (currentDate === 1) {
    day = "Monday";
  } else if (currentDate === 2) {
    day = "Tuesday";
  } else if (currentDate === 3) {
    day = "wednesday";
  } else if (currentDate === 4) {
    day = "thursday";
  } else if (currentDate === 5) {
    day = "friday";
  } else {
    day = "saturday";
  }

  res.render("list", { kindOfDay: day });
});

app.listen(3000, function () {
  console.log("server running on port 3000");
});
