import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  amount: 0,
  price: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const item = state.products.find((product) => product.id == payload.id);

      if (item) {
        item.amount += payload.amount;
      } else {
        state.products.push(payload);
      }
    },
    removeProduct:(state,{payload})=>{}
  },
});
