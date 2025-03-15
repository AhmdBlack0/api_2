const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json("test");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
