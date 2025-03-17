const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("product", productsSchema);
