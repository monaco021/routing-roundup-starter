const express = require("express");
const app = express();
const router = express.Router();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/*xyz", (req, res) => {
  res.send("That's all I wrote.");
});

app.get("/capital-letters/:message", (req, res) => {
  let message = req.params.message;
  res.send(message.toUpperCase());
});

app.get("/*/bio", (req, res) => {
  res.send("Bio");
});

app.get("/*/contact", (req, res) => {
  res.send("Contact");
});

app.get("/about/foo", (req, res) => {
  res.sendStatus(404);
});

app.all("*", (req, res) => {
  let method = req.method;
  let path = req.path;
  let randomNumber = Math.floor(Math.random() * 1000);
  res.render("test", { method, path, randomNumber });
});

const PORT = "8081";

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}...`);
});
