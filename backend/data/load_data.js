const mongoose = require("mongoose");
const fs = require("fs");
const csv = require("csv-parser");

mongoose.connect("mongodb://localhost:27017/ecommerce");

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  category: String,
  price: Number,
  stock: Number
});

const Product = mongoose.model("Product", productSchema);

const results = [];

fs.createReadStream("data/products.csv")
  .pipe(csv())
  .on("data", (row) => {
    results.push(row);
  })
  .on("end", async () => {
    try {
      await Product.insertMany(results);
      console.log("✅ All products inserted into MongoDB");
    } catch (err) {
      console.error("Insert error:", err);
    } finally {
      mongoose.connection.close();
    }
  });
