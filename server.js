const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname) });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
