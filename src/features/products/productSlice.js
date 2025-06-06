import { createSlice } from "@reduxjs/toolkit";

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
      state.error = action.payload.error;
      state.isLoading = false;
      state.products = [];
    },
  },
});

export function searchProduct(search) {
  return async function reducer(dispatch, getState) {
    dispatch({ type: "products/searchInProgress" });

    
      dispatch({ type: "products/searchSuccess", payload: { products: data } });
    }
  };
}

export const { searchInProgress, searchError } = productsSlice.actions;
export default productsSlice.reducer;
