const exp = require("express");
// var body_par = require("body-parser");

const app = exp();

// app.use(body_par.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("server is up and running");
});

// app.post("/", function (res, req) {
//   res.send("hi");
// });

app.listen(3000, function () {
  console.log("server is running");
});
