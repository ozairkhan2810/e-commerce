import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromCart } from "../actions/cartActions";

const Cart = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    // dispatch(cartAct(id));
  }, []);

  const removeCartItemHandler = (id) => {
    console.log("removecart");
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <Typography variant="h3" align="center" mt={5}>
        My Cart {cartItems.length ? `(${cartItems.length})` : ""}
      </Typography>
      {cartItems.length ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "3rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {cartItems.map((item) => (
              <Card
                key={item._id}
                sx={{ maxWidth: 700, display: "flex", padding: "0.5rem" }}
              >
                <CardMedia
                  sx={{
                    height: "10rem",
                    width: "30%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img height="100%" src={`${item.image}`} alt="" />
                </CardMedia>
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ display: "flex" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{ paddingBottom: "4px" }}
                    >
                      Price: 
                      ${item.price}
                    </Typography>
                    <Typography
                      // sx={{ display: "flex", justifyContent: "space-between" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                      width="100px"
                    >
                      <Typography variant="h6" sx={{ paddingBottom: "4px" }}>
                        Qty:{" "}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <RemoveCircleOutlineIcon />
                        <span>1</span>
                        <AddCircleOutlineOutlinedIcon />
                      </Box>
                    </Typography>
                  </CardContent>
                  <Button
                    onClick={() => removeCartItemHandler(item._id)}
                    variant="outlined"
                    color="error"
                    sx={{ width: "fit-content", marginLeft: "0.5rem" }}
                    startIcon={<DeleteIcon />}
                  >
                    Remove From CArt{" "}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Card sx={{ width: 300, height: "fit-content" }}>
            <CardContent>
              <Typography variant="h5">
                Total Price:{" "}
                {cartItems.reduce((acc, cur) => acc + cur.price, 0)}
              </Typography>
            </CardContent>
            <Typography
              sx={{ display: "flex", justifyContent: "center" }}
              component="div"
            >
              <Button
                sx={{ width: "100%", margin: "1rem" }}
                variant="contained"
              >
                Checkout
              </Button>
            </Typography>
          </Card>
        </Box>
      ) : (
        <Box>You Cart Is Empty</Box>
      )}
    </>
  );
};

export default Cart;
