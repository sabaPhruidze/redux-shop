import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    // root reducer
    cart: cartReducer, //cart reducer
  },
});
