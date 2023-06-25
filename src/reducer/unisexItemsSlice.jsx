import { createSlice } from "@reduxjs/toolkit";
import slider from "../../public/images/slider.jpg";
const unisexItemsSlice = createSlice({
  name: "unisexList",
  initialState: {
    productsList: [
      {
        id: 0,
        name: "Unisex name 0",
        price: 100,
        img: slider,
      },
      {
        id: 1,
        name: "Unisex name 1",
        price: 100,
        img: slider,
      },
      {
        id: 2,
        name: "Unisex name 2",
        price: 100,
        img: slider,
      },
      {
        id: 3,
        name: "Unisex name 3",
        price: 100,
        img: slider,
      },
      {
        id: 4,
        name: "Unisex name 4",
        price: 100,
        img: slider,
      },
      {
        id: 5,
        name: "Unisex name 5",
        price: 100,
        img: slider,
      },
      {
        id: 6,
        name: "Unisex name 6",
        price: 100,
        img: slider,
      },
      {
        id: 7,
        name: "Unisex name 7",
        price: 100,
        img: slider,
      },
      {
        id: 8,
        name: "Unisex name 8",
        price: 100,
        img: slider,
      },
    ],
  },
  reducers: {},
});

export default unisexItemsSlice.reducer;
