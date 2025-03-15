const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const connectDB = require("./connectMongo");
connectDB();
const workoutRoutes = require("./routes/workout");

const PORT = process.env.PORT;

app.use("/api/workout", workoutRoutes);

app.get("/", (req, res) => {
  res.json("test");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
