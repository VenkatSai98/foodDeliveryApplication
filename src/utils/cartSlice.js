import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart page items", // name of slice
    initialState: {
        items: [] // intial state of slice
    },
    reducers: {    // we write reducers functions corresponding to that actions, reducers an object
        addItem: (state, action) => {
            // mutating state here
            state.items.push(action.payload)
        },
        clearItem: (state) => {
            state.items.length = 0
        }
    }
})

export const {addItem, clearItem} = cartSlice.actions;
export default cartSlice.reducer;