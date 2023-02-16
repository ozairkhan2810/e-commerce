import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Link,
} from "@mui/material";
// import { Link } from "react-router-dom";

const ProductScreen = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={`/product/${product._id}`} color="inherit" underline="none">
        <CardMedia
          sx={{ height: "200px", display: "flex", justifyContent: "center" }}
        >
          <img height="100%" src={`${product.image}`} alt="" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
            gutterBottom
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
          <Typography gutterBottom variant="h6" component="div">
            $ {product.price}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductScreen;
