const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json("test2");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("server work on port ", PORT);
      console.log("content db");
    });
  })
  .catch((error) => {
    console.log(error);
  });
