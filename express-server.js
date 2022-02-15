const express = require("express");
const cors = require("cors");
const app = express();
const port = 7979;

app.use(cors);

app.get("/", (req, res) => {
  console.log("sss");
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  console.log("req", req);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
