const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./connectMongo");
const productModel = require("./models/product.model");

dotenv.config();
const app = express();

app.use(express.json());

connectDB()
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit the process if DB connection fails
  });

app.get("/api/products", async (req, res) => {
  try {
    const products = await productModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
app.post("/api/products", async (req, res) => {
  const { title, price } = req.body;
  try {
    const product = await productModel.create({ title, price });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
