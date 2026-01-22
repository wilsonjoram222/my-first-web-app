const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

//middlewares

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());

//routes

//create a product
app.post("/products", async (req, res) => {
  try {
    console.log(req.body);
    const { product_name, product_description, price, stock } = req.body;
    const newProduct = await pool.query(
      "INSERT INTO products (product_name, product_description, price, stock) VALUES ($1, $2, $3, $4) RETURNING *",
      [product_name, product_description, price, stock],
    );
    res.json(newProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
//get all products
app.get("/products", async (req, res) => {
  try {
    const allProducts = await pool.query("SELECT * FROM products");
    res.json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//get a product
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await pool.query(
      "SELECT * FROM products WHERE product_id = $1",
      [id],
    );
    res.json(product.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
//update a product
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { product_name, product_description, price, stock } = req.body;
    const updateProduct = await pool.query(
      "UPDATE products SET product_name = $1, product_description = $2, price = $3, stock = $4 WHERE product_id = $5",
      [product_name, product_description, price, stock, id],
    );
    res.json("Product was updated!");
  } catch (err) {
    console.error(err.message);
  }
});
//delete a product
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await pool.query(
      "DELETE FROM products WHERE product_id = $1",
      [id],
    );
    res.json("Product was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
