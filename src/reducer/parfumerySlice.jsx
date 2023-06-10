import img from "../../public/images/one-product.jpg";
import { createSlice } from "@reduxjs/toolkit";

const parfumerySlice = createSlice({
  name: "parfumery",
  initialState: {
    parfumery: [
      {
        id: 0,
        label: "Man",
        img: img,
        to: "/man",
      },
      {
        id: 1,
        label: "Woman",
        img: img,
        to: "/woman",
      },
      {
        id: 2,
        label: "Unisex",
        img: img,
        to: "/unisex",
      },
    ],
  },
});
export default parfumerySlice.reducer;
