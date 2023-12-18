import { configureStore } from "@reduxjs/toolkit";
import { CART_ } from "./features/cartSclice";

const store = configureStore({
  reducer: CART_.reducer,
});
export default store;
