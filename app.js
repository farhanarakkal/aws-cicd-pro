const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Working from CloudShell 🚀");
});

app.listen(3000, () => console.log("Server started"));

