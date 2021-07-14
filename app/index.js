import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Star Wars API</h1>");
});

app.listen(PORT, () => {
  console.log("server running");
});
