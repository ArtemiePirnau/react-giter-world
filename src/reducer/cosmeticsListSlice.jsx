import { createSlice } from "@reduxjs/toolkit";
import slider from "../../public/images/slider.jpg";
const cosmeticsItemsSlice = createSlice({
  name: "cosmeticsList",
  initialState: {
    productsList: [
      {
        id: 0,
        name: "Cosmetics Name 0",
        price: 100,
        img: slider,
      },
      {
        id: 1,
        name: "Cosmetics Name 1",
        price: 100,
        img: slider,
      },
      {
        id: 2,
        name: "Cosmetics Name 2",
        price: 100,
        img: slider,
      },
      {
        id: 3,
        name: "Cosmetics Name 3",
        price: 100,
        img: slider,
      },
      {
        id: 4,
        name: "Cosmetics Name 4",
        price: 100,
        img: slider,
      },
      {
        id: 5,
        name: "Cosmetics Name 5",
        price: 100,
        img: slider,
      },
      {
        id: 6,
        name: "Cosmetics Name 6",
        price: 100,
        img: slider,
      },
      {
        id: 7,
        name: "Name Product 7",
        price: 100,
        img: slider,
      },
      {
        id: 8,
        name: "Name Product 8",
        price: 100,
        img: slider,
      },
    ],
  },
  reducers: {},
});

export default cosmeticsItemsSlice.reducer;
