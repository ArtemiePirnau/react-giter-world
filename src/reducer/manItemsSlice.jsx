import { createSlice } from "@reduxjs/toolkit";
import slider from "../../public/images/slider.jpg";
const manItemsSlice = createSlice({
  name: "manList",
  initialState: {
    productsList: [
      {
        id: 0,
        name: "Parfum for men 0",
        price: 100,
        img: slider,
      },
      {
        id: 1,
        name: "Parfum for men 1",
        price: 100,
        img: slider,
      },
      {
        id: 2,
        name: "Parfum for men 2",
        price: 100,
        img: slider,
      },
      {
        id: 3,
        name: "Parfum for men 3",
        price: 100,
        img: slider,
      },
      {
        id: 4,
        name: "Parfum for men 4",
        price: 100,
        img: slider,
      },
      {
        id: 5,
        name: "Parfum for men 5",
        price: 100,
        img: slider,
      },
      {
        id: 6,
        name: "Parfum for men 6",
        price: 100,
        img: slider,
      },
      {
        id: 7,
        name: "Parfum for men 7",
        price: 100,
        img: slider,
      },
      {
        id: 8,
        name: "Parfum for men 8",
        price: 100,
        img: slider,
      },
    ],
  },
  reducers: {},
});

export default manItemsSlice.reducer;
