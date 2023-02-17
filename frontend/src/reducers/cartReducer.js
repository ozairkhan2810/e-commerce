export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "REMOVE_FROM_CART":
      return { ...state, cartItems: state.cartItems.filter(prod => prod._id !== action.payload) };
    default:
      return state;
  }
};
