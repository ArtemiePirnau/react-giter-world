import { createSlice } from "@reduxjs/toolkit";
import slider from "../../public/images/slider.jpg";
const manItemsSlice = createSlice({
  name: "manList",
  initialState: {
    productsList: [
      {
        id: 0,
        name: "Parfum Code Collection",
        price: 100,
        img: slider,
      },
      {
        id: 1,
        name: "Parfum Code Collection",
        price: 100,
        img: slider,
      },
      {
        id: 2,
        name: "Parfum Code Collection",
        price: 100,
        img: slider,
      },
      {
        id: 3,
        name: "Parfum Code Collection",
        price: 100,
        img: slider,
      },
      {
        id: 4,
        name: "Parfum Code Collection",
        price: 100,
        img: slider,
      },
      {
        id: 5,
        name: "Parfum Code Collection",
        price: 100,
        img: slider,
      },
      {
        id: 6,
        name: "Parfum Code Collection",
        price: 100,
        img: slider,
      },
      {
        id: 7,
        name: "Parfum Code Collection",
        price: 100,
        img: slider,
      },
      {
        id: 8,
        name: "Parfum Code Collection",
        price: 100,
        img: slider,
      },
    ],
  },
  reducers: {},
});

export default manItemsSlice.reducer;
