const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let url = "";

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({
    message: "hello there",
  });
});

app.get("/url", (req, res) => {
  res.send({
    url,
  });
});

app.post("/url", (req, res) => {
  console.log(req.body);
  url = req.body.url;
  res.send({
    message: "url changed",
  });
});

app.listen(3000, () => console.log("Gator app listening on port 3000!"));
