import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const CART_ = createSlice({
  name: "product_cart",
  initialState: { cartQuanity: 0, cartItems: [], wishList: [] },
  reducers: {
    addToCart: (state, action) => {
      const product_ID = action.payload.id;
      console.log(product_ID);
      const foundObject = state.cartItems.find(obj => obj.id === product_ID);
      if (foundObject) {
        toast.warn("This Product is already in cart", {
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 1,
        });
      } else {
        state.cartItems.push(action.payload);
        toast.success("Product added to Cart", {
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      state.cartQuanity += 1;
    },
    add_to_cart: (state, action) => {
      const product_ID = action.payload.id;
      console.log(product_ID);
      const foundObject = state.wishList.find(obj => obj.id === product_ID);
      if (foundObject) {
        toast.warn("This Product is already in WishList", {
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 1,
        });
      } else {
        state.wishList.push(action.payload);
        toast.success("Product added to Wishlist", {
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
  },
});

export const { addToCart, add_to_cart } = CART_.actions;
