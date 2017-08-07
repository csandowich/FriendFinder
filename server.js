const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

const apirout = require("./app/routing/apiroutes")(app);
const htmlrout = require("./app/routing/htmlroutes")(app);

// app.get("/", function(req, res) {
//   console.log("route /");
//   res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });
// app.get("/survey", function(req, res) {
//   console.log("route /survey");
//   res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });
// app.get("/api/friends", function(req, res) {
//   console.log("route /api/friends");
//   res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });

app.listen(3000);
