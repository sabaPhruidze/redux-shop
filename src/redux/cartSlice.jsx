import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //საერთო ღირებულებაზე დამატება
      state.cartItems.push(action.payload); //
      state.totalPrice += action.payload.price;
    },
    clearCart: (state) => {
      // გასუფთავების ბრძანება
      state.cartItems = []; //დავაცარიელეთ მასივი
      state.totalPrice = 0; // გავანულეთ საერთო ფასი
    },
  },
});
//actions გავიტანე
export const { addToCart, clearCart } = cartSlice.actions;
//ლოგიკა გავიტანე
export default cartSlice.reducer;
