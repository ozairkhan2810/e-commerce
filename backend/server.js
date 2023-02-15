const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const products = require("./data/products");

const productsRoute = require('./routes/productsRoute')

dotenv.config()
connectDB()

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome" });
});

app.use('/api',productsRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} at ${PORT}`);
});
