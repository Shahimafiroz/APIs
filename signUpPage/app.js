var exp = require("express");

const app = exp();

app.get("/", function (res, req) {
  res.sendFile(__dirname + "index.html");
});
