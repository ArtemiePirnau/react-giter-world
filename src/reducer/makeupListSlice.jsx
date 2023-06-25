import { createSlice } from "@reduxjs/toolkit";
import slider from "../../public/images/cosmetic-item.png";
const makeupItemsSlice = createSlice({
  name: "makeupList",
  initialState: {
    productsList: [
      {
        id: 0,
        name: "Makeup name 0",
        price: 100,
        img: slider,
      },
      {
        id: 1,
        name: "Makeup name 1",
        price: 100,
        img: slider,
      },
      {
        id: 2,
        name: "Makeup name 2",
        price: 100,
        img: slider,
      },
      {
        id: 3,
        name: "Makeup name 3",
        price: 100,
        img: slider,
      },
      {
        id: 4,
        name: "Makeup name 4",
        price: 100,
        img: slider,
      },
      {
        id: 5,
        name: "Makeup name 5",
        price: 100,
        img: slider,
      },
      {
        id: 6,
        name: "Makeup name 6",
        price: 100,
        img: slider,
      },
      {
        id: 7,
        name: "Makeup name 7",
        price: 100,
        img: slider,
      },
      {
        id: 8,
        name: "Makeup name 8",
        price: 100,
        img: slider,
      },
    ],
  },
  reducers: {},
});

export default makeupItemsSlice.reducer;
