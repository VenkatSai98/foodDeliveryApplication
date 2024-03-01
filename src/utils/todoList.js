import { createSlice } from "@reduxjs/toolkit";

const todoList = createSlice({
  name: "todoList",
  initialState: {
    items: [],
  },
  reducers: {
    addList: (state, action) => {
      state.items.push(action.payload);
    },
    removeList: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addList, removeList } = todoList.actions;
export default todoList.reducer;
