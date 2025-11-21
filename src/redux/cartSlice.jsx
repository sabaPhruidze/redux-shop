import { createSlice } from "@reduxjs/toolkit";

const initialState = { // საწყისი მდგომარეობა
    cartItems:[],// კალათის ნივთები აქ ინახება
    totalPrice:0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state,action) => {// ბრძანება დამატების
            //state მიმდინარე მდგომარება
            //action სიახლე მაგალითად ღილაკს დაეჭირა ან სხვა რა
            state.cartItems.push(action.payload); // 
            state.totalPrice += action.payload.price;
        },
        clearCart: (state) => {// გასუფთავების ბრძანება
            state.cartItems=[];//დავაცარიელეთ მასივი
            state.totalPrice=0;// გავანულეთ საერთო ფასი
        }
    }
})

export const {addToCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer