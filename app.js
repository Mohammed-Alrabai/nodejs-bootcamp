const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.send("Mohammed Alrabai");
});

app.listen(8000, () => {
  console.log("listening");
});
