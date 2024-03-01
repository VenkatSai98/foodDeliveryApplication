import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "thunkTesting",
  initialState,
  //   reducers: {
  //     fetchProducts: (state, action) => {
  //       state.data = action.payload;
  //     },
  //   },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        (state.data = action.payload), (state.status = "completed");
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(getProducts.pending, (state) => {
        state.status = "pending";
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

// export const getProducts = () => {
//   return async function getThunkData(dispatch) {
//     const fetchApi = await fetch("https://fakestoreapi.com/products");
//     const apiResponse = await fetchApi.json();
//     console.log(apiResponse, "api");
//     dispatch(fetchProducts(apiResponse));
//   };
// };

export const getProducts = createAsyncThunk("getProducts", async () => {
  const fetchApi = await fetch("https://fakestoreapi.com/products");
  const apiResponse = await fetchApi.json();
  return apiResponse;
});
