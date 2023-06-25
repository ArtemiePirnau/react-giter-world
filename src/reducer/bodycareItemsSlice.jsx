import { createSlice } from "@reduxjs/toolkit";
import slider from "../../public/images/body-care.jpg";
const bodycareItemsSlice = createSlice({
  name: "bodycareList",
  initialState: {
    productsList: [
      {
        id: 0,
        name: "Bodycare name 0",
        price: 100,
        img: slider,
      },
      {
        id: 1,
        name: "Bodycare name 1",
        price: 100,
        img: slider,
      },
      {
        id: 2,
        name: "Bodycare name 2",
        price: 100,
        img: slider,
      },
      {
        id: 3,
        name: "Bodycare name 3",
        price: 100,
        img: slider,
      },
      {
        id: 4,
        name: "Bodycare name 4",
        price: 100,
        img: slider,
      },
      {
        id: 5,
        name: "Bodycare name 5",
        price: 100,
        img: slider,
      },
      {
        id: 6,
        name: "Bodycare name 6",
        price: 100,
        img: slider,
      },
      {
        id: 7,
        name: "Bodycare name 7",
        price: 100,
        img: slider,
      },
      {
        id: 8,
        name: "Bodycare name 8",
        price: 100,
        img: slider,
      },
    ],
  },
  reducers: {},
});

export default bodycareItemsSlice.reducer;
