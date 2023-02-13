import { Box } from "@mui/material";
import React from "react";
import Products from "../products";
import ProductScreen from "./ProductScreen";

const HomeScreen = () => {
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
      {Products.map((product) => (
        <ProductScreen key={product._id} product={product} />
      ))}
    </Box>
  );
};

export default HomeScreen;
