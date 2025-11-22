import { configureStore } from "@reduxjs/toolkit"; // Redux-ის მთავარი ინსტრუმენტი, რომელიც ქმნის საცავს.
import cartReducer from './cartSlice' //export default cartSlice.reducer არის ეს

export const store = configureStore({
    reducer: { // რა განყოფილებები , ასე ვთქვათ slice გვაქვს
        cart:cartReducer, //ამ განყოფილებას დაერქმევა cart
    }
})