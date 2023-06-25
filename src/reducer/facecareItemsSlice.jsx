import { createSlice } from "@reduxjs/toolkit";
import slider from "../../public/images/face-care.jpg";
const facecareItemsSlice = createSlice({
  name: "facecareList",
  initialState: {
    productsList: [
      {
        id: 0,
        name: "Facecare name 0",
        price: 100,
        img: slider,
      },
      {
        id: 1,
        name: "Facecare name 1",
        price: 100,
        img: slider,
      },
      {
        id: 2,
        name: "Facecare name 2",
        price: 100,
        img: slider,
      },
      {
        id: 3,
        name: "Facecare name 3 ",
        price: 100,
        img: slider,
      },
      {
        id: 4,
        name: "Facecare name 4",
        price: 100,
        img: slider,
      },
      {
        id: 5,
        name: "Facecare name 5",
        price: 100,
        img: slider,
      },
      {
        id: 6,
        name: "Facecare name 6",
        price: 100,
        img: slider,
      },
      {
        id: 7,
        name: "Facecare name 7",
        price: 100,
        img: slider,
      },
      {
        id: 8,
        name: "Facecare name 8",
        price: 100,
        img: slider,
      },
    ],
  },
  reducers: {},
});

export default facecareItemsSlice.reducer;
