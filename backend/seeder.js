const mongoose = require("mongoose");
const products = require("./models/productModel");
const users = require("./models/userModel");
const productData = require("./data/products");
const userData = require("./data/users");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/crickit", {
      useNewUrlParser: true,
    });
    const createUser = await users.insertMany(userData);
    const adminUser = createUser[0]._id;
    const sampleData = productData.map((prod) => ({
      ...prod,
      user: adminUser,
    }));
    await products.insertMany(sampleData);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();
