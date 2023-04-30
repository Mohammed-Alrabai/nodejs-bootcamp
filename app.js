const express = require("express");

const app = express();

app.get("/name", (req, res) => {
  res.send("Mohammed");
});

app.listen(8000, () => {
  console.log("listening");
});
