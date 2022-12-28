//jshint esversion: 6

var exp = require("express");
const bp = require("body-parser");
var request = require("request");
var https = require("https");

const app = exp();

app.use(exp.static("public"));
app.use(bp.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.lname;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FMANE: fname,
          LNAME: lname,
        },
      },
    ],
  };

  // stringyfying the data  sdata = jasonData
  const sdata = JSON.stringify(data);

  // request

  const url = "https://us17.api.mailchimp.com/3.0/lists/0e7dcd340a";
  const opt = {
    method: "POST",
    auth: "shahima1 : 5d0e79572a7c93bdbf6e73b50ab33564-us17",
  };

  const request = https.request(url, opt, function (response) {
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(sdata);
  request.end();
});

app.listen(3000, function () {
  console.log("server is running");
});

// api key 5d0e79572a7c93bdbf6e73b50ab33564-us17
// list/audience Id 0e7dcd340a.
// instance - 17
