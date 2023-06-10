import { createSlice } from "@reduxjs/toolkit";

const productsItemsSlice = createSlice({
  name: "productsList",
  initialState: {
    productsList: [
      {
        id: 0,
        name: "Name Product",
        price: 100,
      },
      {
        id: 1,
        name: "Name Product",
        price: 100,
      },
      {
        id: 2,
        name: "Name Product",
        price: 100,
      },
      {
        id: 3,
        name: "Name Product",
        price: 100,
      },
      {
        id: 4,
        name: "Name Product",
        price: 100,
      },
      {
        id: 5,
        name: "Name Product",
        price: 100,
      },
      {
        id: 6,
        name: "Name Product",
        price: 100,
      },
      {
        id: 7,
        name: "Name Product",
        price: 100,
      },
      {
        id: 8,
        name: "Name Product",
        price: 100,
      },
    ],
  },
  reducers: {},
});

export default productsItemsSlice.reducer;
