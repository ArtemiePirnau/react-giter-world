import { createSlice } from "@reduxjs/toolkit";
import slider from "../../public/images/body-care.jpg";
const bodycareItemsSlice = createSlice({
  name: "bodycareList",
  initialState: {
    productsList: [
      {
        id: 0,
        name: "Name Product",
        price: 100,
        img: slider,
      },
      {
        id: 1,
        name: "Name Product",
        price: 100,
        img: slider,
      },
      {
        id: 2,
        name: "Name Product",
        price: 100,
        img: slider,
      },
      {
        id: 3,
        name: "Name Product",
        price: 100,
        img: slider,
      },
      {
        id: 4,
        name: "Name Product",
        price: 100,
        img: slider,
      },
      {
        id: 5,
        name: "Name Product",
        price: 100,
        img: slider,
      },
      {
        id: 6,
        name: "Name Product",
        price: 100,
        img: slider,
      },
      {
        id: 7,
        name: "Name Product",
        price: 100,
        img: slider,
      },
      {
        id: 8,
        name: "Name Product",
        price: 100,
        img: slider,
      },
    ],
  },
  reducers: {},
});

export default bodycareItemsSlice.reducer;