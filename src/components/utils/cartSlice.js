import { createSlice, current } from "@reduxjs/toolkit";


// const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        resDetails: {}
    },
    reducers: {
       
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            let itemId = action.payload.id;
            for (let i = 0; i < state.items.length; i++) {
                if(state.items[i].id === itemId) {
                    state.items.splice(i, 1);
                    break;
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;