import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Product from "../products";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box } from "@mui/system";

const ProductDetails = () => {
  const { id } = useParams();

  const product = Product.find((p) => p._id === id);
  return (
    <>
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
          sx={{ width: "400px" }}
          component="img"
          image={`${product.image}`}
          alt={`${product.image}`}
        />
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
              value={product.rating}
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
    </>
  );
};

export default ProductDetails;
