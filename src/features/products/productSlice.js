import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../services/apiProducts";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchSuccess: {
      prepare(products) {
        return {
          payload: {
            products,
          },
        };
      },
      reducer(state, action) {
        state.products = action.payload.products;
      },
    },
    searchInProgress(state, action) {
      state.isLoading = true;
    },
    searchError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
      state.products = [];
    },
  },
});

export function searchProducts(search) {
  return async function reducer(dispatch, getState) {
    dispatch({ type: "products/searchInProgress" });

    try {
      const products = await getProducts(search);
      dispatch({
        type: "products/searchSuccess",
        payload: { products: products },
      });
    } catch (error) {
      dispatch({ type: "products/searchError", payload: error.message });
    }
  };
}

export const { searchInProgress, searchError } = productsSlice.actions;
export default productsSlice.reducer;
