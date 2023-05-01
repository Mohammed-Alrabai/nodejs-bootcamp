const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.get("/hello", (req, res) => {
  res.send("Mohammed Alrabai");
});
app.get("/index", (req, res) => {
  const grand = 95;
  res.render("index.ejs", { degree: grand });
});

app.listen(8000, () => {
  console.log("listening");
});
