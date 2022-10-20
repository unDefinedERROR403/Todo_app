// express server which stores data of user
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 4000;

app.use(cors());
app.use(bodyParser.json());

let users = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users", (req, res) => {
  users.push(req.body);
  res.send(users);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
