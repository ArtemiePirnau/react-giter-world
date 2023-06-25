import { createSlice } from "@reduxjs/toolkit";
import slider from "../../public/images/slider.jpg";
const womanItemsSlice = createSlice({
  name: "womanList",
  initialState: {
    productsList: [
      {
        id: 0,
        name: "Woman name 0",
        price: 100,
        img: slider,
      },
      {
        id: 1,
        name: "Woman name 1",
        price: 100,
        img: slider,
      },
      {
        id: 2,
        name: "Woman name 2",
        price: 100,
        img: slider,
      },
      {
        id: 3,
        name: "Woman name 3",
        price: 100,
        img: slider,
      },
      {
        id: 4,
        name: "Woman name 4",
        price: 100,
        img: slider,
      },
      {
        id: 5,
        name: "Woman name 5",
        price: 100,
        img: slider,
      },
      {
        id: 6,
        name: "Woman name 6",
        price: 100,
        img: slider,
      },
      {
        id: 7,
        name: "Woman name 7",
        price: 100,
        img: slider,
      },
      {
        id: 8,
        name: "Woman name 8",
        price: 100,
        img: slider,
      },
    ],
  },
  reducers: {
    getDataFromItem() {
      console.log(state);
    },
  },
});

export default womanItemsSlice.reducer;
export const { getDataFromItem } = womanItemsSlice.actions;
