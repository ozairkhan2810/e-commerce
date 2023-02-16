import React, { useEffect } from "react";
import { Box } from "@mui/material";
import ProductScreen from "./ProductScreen";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productList);
  const { loading, error, products } = data;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

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
      {loading && <Loader />}
      {error && <ErrorMessage severity="error">{error}</ErrorMessage>}
      {products &&
        products.map((product) => (
          <ProductScreen key={product._id} product={product} />
        ))}
    </Box>
  );
};

export default HomeScreen;
