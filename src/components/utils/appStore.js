import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import locationSlice from "./locationSlice";
const appStore = configureStore(
{
    reducer:{
        cart :cartReducer,
        location : locationSlice,
    },
}
);
export  default appStore;