import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import todoList from "./todoList";
import searchSlice from "./searchSlice";
import productSlice from "./productSlice";

const appStore = configureStore({
    reducer:{  // this reducer is combination for small reducers
        cart: cartSlice,
        todo: todoList,
        search: searchSlice,
        products: productSlice
    }
});

export default appStore;
