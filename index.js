const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const connectDB = require("./connectMongo");
connectDB();
const BookModel = require("./models/book.model");

app.get("/api/products", async (req, res) => {
  res.json({ msg: "Hello World" });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
