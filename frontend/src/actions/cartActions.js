import axios from "axios";

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({ type: "ADD_TO_CART", payload: data });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: id });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
