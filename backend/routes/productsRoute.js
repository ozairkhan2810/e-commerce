const express = require("express");
const products = require("../models/productModel");

const router = express.Router();

router.get("/products", async (req, res) => {
  const data = await products.find({});
  res.json(data);
});

router.get("/products/:id", async (req, res) => {
  const data = await products.findById(req.params.id);
  res.json(data);
});

module.exports = router;
