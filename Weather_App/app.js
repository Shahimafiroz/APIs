const bp = require("body-parser");
const exp = require("express");
const https = require("https");
const app = exp();

app.use(bp.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body.cityName);
  const apiKey = "3c86e64ecb78355d03b5dd63812fe9a8";
  const query = req.body.cityName;
  const units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?appid=" +
    apiKey +
    "&units=" +
    units +
    "&q=" +
    query;
  https.get(url, function (resp) {
    resp.on("data", function (data) {
      console.log(resp.statusCode);

      const weather_data = JSON.parse(data);
      const temp = weather_data.main.temp;
      const des = weather_data.weather[0].description;
      const location = weather_data.name;
      const humidity = weather_data.main.humidity;
      const pressure = weather_data.main.pressure;
      const wind = weather_data.wind.speed;
      const icon = weather_data.weather[0].icon;
      const iconurl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write(
        "<h1>weather in " + location + " is currently " + des + " like .</h1>"
      );

      res.write("<h1>temperature is " + temp + "</h1>");
      res.write("<h1>Pressure is " + pressure + "</h1>");
      res.write("<h1>humidity is " + humidity + "</h1>");
      res.write("<h1>wind speed is " + wind + "</h1>");
      res.write("<img src = " + iconurl + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("server is running");
});
