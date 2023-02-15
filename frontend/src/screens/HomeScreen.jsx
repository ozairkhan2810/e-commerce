import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ProductScreen from "./ProductScreen";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get("/api/products");
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      {products &&
        products.map((product) => (
          <ProductScreen key={product._id} product={product} />
        ))}
    </Box>
  );
};

export default HomeScreen;
