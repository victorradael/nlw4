import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Helloooooo!" });
});

app.post("/", (req, res) => {
  return res.json({ message: "Deu certo!" });
});

app.listen(3333, () => {
  console.log("Server is Running!");
});
