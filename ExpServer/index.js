// 1  import the express module
import express from "express";
// 2  create a constant for using express module in the followung server code {in this case "app" is the constant}
const app = express();
// server code

// GET request
app.get("/", (req, res) => {
  res.send("hellooooo shahima !!!");
});

// server code

// 3 initialize a port {in this case 3000} for the serve to listen and respond to requests

app.listen(3000, () => {
  // this is the callback function that is going to be triggered when our server is triggered.
  console.log("The server is running on port 3000.");
});
