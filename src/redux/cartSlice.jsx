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
//actions (ბრძანებები): ესენი (addToCart, clearCart) გვჭირდება React-ის კომპონენტებში (მაგალითად, ღილაკზე დაჭერისას).
export const {addToCart,clearCart} = cartSlice.actions;
//reducer (ტვინი): ეს არის მთლიანი ლოგიკა, რომელიც გვჭირდება Redux Store-ში (საცავში), რომ მან იცოდეს, როგორ მართოს ეს კონკრეტული ნაწილი.
export default cartSlice.reducer