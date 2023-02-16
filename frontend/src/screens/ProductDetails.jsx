import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Rating,
  Typography,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productAction";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productDetails);
  const { error, loading, product } = data;

  const [rating, setRating] = useState(0);
  
  useEffect(() => {
    dispatch(listProductDetails(id));
    setRating(product.rating);
  }, [dispatch, id, product]);
  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage severity="error">{error}</ErrorMessage>}
      {product && (
        <Card
          sx={{
            minWidth: 275,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            height: "35rem",
            width: "55rem",
            margin: "auto",
            marginTop: "1rem",
          }}
        >
          <Typography sx={{ position: "absolute", top: "1rem", left: "1rem" }}>
            <Link href="/">
              <ArrowBackIcon />
            </Link>
          </Typography>
          <CardMedia
            sx={{
              height: "20rem",
              width: "35%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img height="100%" src={`${product.image}`} alt="" />
          </CardMedia>
          <CardContent sx={{ width: "40%" }}>
            <Typography gutterBottom variant="h3" color="text.secondary">
              {product.name}
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
              gutterBottom
              mb={2}
            >
              <Rating
                name="read-only"
                value={rating}
                precision={0.5}
                readOnly
              />
              <Typography component="span">
                {product.numReviews} reviews
              </Typography>
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Price: ${product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {product.description}
            </Typography>
            <Typography variant="h6">Availability: In Stock</Typography>
            <Box
              sx={{
                marginTop: "1rem",
              }}
            >
              <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
                Add to Cart
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ProductDetails;
