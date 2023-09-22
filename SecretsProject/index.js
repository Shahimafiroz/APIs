import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>wtf ? u forgot the basics? </h1>");
  console.log(req.rawHeaders); // rawHeaders keeps the info concise only || The raw request/response headers list exactly as they were received.
});

app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});

// nodemon is a package for node installed using node package manager . Nodemon is a utility tool for Node.js developers that helps automate the development workflow. It is particularly useful during the development phase of a Node.js application. Nodemon stands for "Node Monitor," and its primary function is to monitor files in your Node.js application's directory for changes and automatically restart the server when it detects any modifications. This eliminates the need for you to manually stop and restart the server every time you make changes to your code.
