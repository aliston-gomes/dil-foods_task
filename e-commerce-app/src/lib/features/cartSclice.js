import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const getApiProducts = createAsyncThunk("asyncThunkReducer/get", async () => {
  try {
    const response = await axios.get("http://localhost:3006/products");
    console.log(response, "RESPONSE");
    const result = response.data;
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
});
export const CART_ = createSlice({
  name: "product_cart",
  initialState: {
    cartQuanity: 0,
    cartItems: [],
    wishList: [],
    product_id: 1,
    cart_total: 0,
  },
  reducers: {
    getCartTotal: state => {
      console.log(state.cart_total, "state.cart_total");
    },
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
    add_to_wishlist: (state, action) => {
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
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload.id;
      const updatedCartItems = state.cartItems.filter(
        item => item.id !== productIdToRemove
      );

      if (updatedCartItems.length < state.cartItems.length) {
        state.cartItems = updatedCartItems;
        state.cartQuanity -= 1;
        toast.info("Product removed from Cart", {
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.warn("Product not found in Cart", {
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 1,
        });
      }
    },
    removeFromWishlist: (state, action) => {
      const product_ID = action.payload.id;
      const indexToRemove = state.wishList.findIndex(
        obj => obj.id === product_ID
      );
      if (indexToRemove !== -1) {
        state.wishList.splice(indexToRemove, 1);
        state.cartQuanity -= 1;
        toast.info("Product removed from wishlist", {
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.warn("Product not found in wishlist", {
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 1,
        });
      }
    },
    setProduct_id: (state, action) => {
      state.product_id = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getApiProducts.fulfilled, (state, action) => {
      console.log("hello");
      state.data = action.payload;
      // state.cartItems = state.data.filter(item => item.in_Cart == true);
      const totalPrice = state.cartItems.reduce((accumulator, product) => {
        return accumulator + product.price;
      }, 0);
      state.cart_total = Math.round(totalPrice * 100) / 100;
    });
  },
});

export const {
  addToCart,
  add_to_wishlist,
  setProduct_id,
  removeFromWishlist,
  getCartTotal,
  removeFromCart,
} = CART_.actions;
export { getApiProducts };
