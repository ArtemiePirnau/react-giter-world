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
        to: "/products-page/parfumery/man",
      },
      {
        id: 1,
        label: "Woman",
        img: img,
        to: "/products-page/parfumery/woman",
      },
      {
        id: 2,
        label: "Unisex",
        img: img,
        to: "/products-page/parfumery/unisex",
      },
    ],
  },
});
export default parfumerySlice.reducer;
