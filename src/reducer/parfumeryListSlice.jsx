import { createSlice } from "@reduxjs/toolkit";
import slider from "../../public/images/slider.jpg";
import bodycare from "../../public/images/body-care.jpg";
import makeup from "../../public/images/cosmetic-item.png";
import facecare from "../../public/images/face-care.jpg";
const parfumeryItemsSlice = createSlice({
  name: "parfumeryList",
  initialState: {
    productsList: [
      {
        id: 0,
        name: "Parfum name 0",
        price: 100,
        img: slider,
      },
      {
        id: 1,
        name: "Parfum name 1",
        price: 100,
        img: slider,
      },
      {
        id: 2,
        name: "Parfum name 2",
        price: 100,
        img: slider,
      },
      {
        id: 3,
        name: "Parfum name 3",
        price: 100,
        img: slider,
      },
      {
        id: 4,
        name: "Parfum name 4",
        price: 100,
        img: slider,
      },
      {
        id: 5,
        name: "Parfum name 5",
        price: 100,
        img: slider,
      },
      {
        id: 6,
        name: "Parfum name 6",
        price: 100,
        img: slider,
      },
      {
        id: 7,
        name: "Parfum name 7",
        price: 100,
        img: slider,
      },
      {
        id: 8,
        name: "Parfum name 8",
        price: 100,
        img: slider,
      },
      // Woman Items
      {
        id: 9,
        name: "Woman name 0",
        price: 100,
        img: slider,
      },
      {
        id: 10,
        name: "Woman name 1",
        price: 100,
        img: slider,
      },
      {
        id: 11,
        name: "Woman name 2",
        price: 100,
        img: slider,
      },
      {
        id: 12,
        name: "Woman name 3",
        price: 100,
        img: slider,
      },
      {
        id: 13,
        name: "Woman name 4",
        price: 100,
        img: slider,
      },
      {
        id: 14,
        name: "Woman name 5",
        price: 100,
        img: slider,
      },
      {
        id: 15,
        name: "Woman name 6",
        price: 100,
        img: slider,
      },
      {
        id: 16,
        name: "Woman name 7",
        price: 100,
        img: slider,
      },
      {
        id: 17,
        name: "Woman name 8",
        price: 100,
        img: slider,
      },
      // Unisex items
      {
        id: 18,
        name: "Unisex name 0",
        price: 100,
        img: slider,
      },
      {
        id: 19,
        name: "Unisex name 1",
        price: 100,
        img: slider,
      },
      {
        id: 20,
        name: "Unisex name 2",
        price: 100,
        img: slider,
      },
      {
        id: 21,
        name: "Unisex name 3",
        price: 100,
        img: slider,
      },
      {
        id: 22,
        name: "Unisex name 4",
        price: 100,
        img: slider,
      },
      {
        id: 23,
        name: "Unisex name 5",
        price: 100,
        img: slider,
      },
      {
        id: 24,
        name: "Unisex name 6",
        price: 100,
        img: slider,
      },
      {
        id: 25,
        name: "Unisex name 7",
        price: 100,
        img: slider,
      },
      {
        id: 26,
        name: "Unisex name 8",
        price: 100,
        img: slider,
      },
      // Man Items
      {
        id: 27,
        name: "Parfum for men 0",
        price: 100,
        img: slider,
      },
      {
        id: 28,
        name: "Parfum for men 1",
        price: 100,
        img: slider,
      },
      {
        id: 29,
        name: "Parfum for men 2",
        price: 100,
        img: slider,
      },
      {
        id: 30,
        name: "Parfum for men 3",
        price: 100,
        img: slider,
      },
      {
        id: 31,
        name: "Parfum for men 4",
        price: 100,
        img: slider,
      },
      {
        id: 32,
        name: "Parfum for men 5",
        price: 100,
        img: slider,
      },
      {
        id: 33,
        name: "Parfum for men 6",
        price: 100,
        img: slider,
      },
      {
        id: 34,
        name: "Parfum for men 7",
        price: 100,
        img: slider,
      },
      {
        id: 35,
        name: "Parfum for men 8",
        price: 100,
        img: slider,
      },
      // Bodycare
      {
        id: 36,
        name: "Bodycare name 0",
        price: 100,
        img: bodycare,
      },
      {
        id: 37,
        name: "Bodycare name 1",
        price: 100,
        img: bodycare,
      },
      {
        id: 38,
        name: "Bodycare name 2",
        price: 100,
        img: bodycare,
      },
      {
        id: 39,
        name: "Bodycare name 3",
        price: 100,
        img: bodycare,
      },
      {
        id: 40,
        name: "Bodycare name 4",
        price: 100,
        img: bodycare,
      },
      {
        id: 41,
        name: "Bodycare name 5",
        price: 100,
        img: bodycare,
      },
      {
        id: 42,
        name: "Bodycare name 6",
        price: 100,
        img: bodycare,
      },
      {
        id: 43,
        name: "Bodycare name 7",
        price: 100,
        img: bodycare,
      },
      {
        id: 44,
        name: "Bodycare name 8",
        price: 100,
        img: bodycare,
      },
      // Facecare items
      {
        id: 45,
        name: "Facecare name 0",
        price: 100,
        img: facecare,
      },
      {
        id: 46,
        name: "Facecare name 1",
        price: 100,
        img: facecare,
      },
      {
        id: 47,
        name: "Facecare name 2",
        price: 100,
        img: facecare,
      },
      {
        id: 48,
        name: "Facecare name 3 ",
        price: 100,
        img: facecare,
      },
      {
        id: 49,
        name: "Facecare name 4",
        price: 100,
        img: facecare,
      },
      {
        id: 50,
        name: "Facecare name 5",
        price: 100,
        img: facecare,
      },
      {
        id: 51,
        name: "Facecare name 6",
        price: 100,
        img: facecare,
      },
      {
        id: 52,
        name: "Facecare name 7",
        price: 100,
        img: facecare,
      },
      {
        id: 53,
        name: "Facecare name 8",
        price: 100,
        img: facecare,
      },
      // Make up items
      {
        id: 54,
        name: "Makeup name 0",
        price: 100,
        img: makeup,
      },
      {
        id: 55,
        name: "Makeup name 1",
        price: 100,
        img: makeup,
      },
      {
        id: 56,
        name: "Makeup name 2",
        price: 100,
        img: makeup,
      },
      {
        id: 57,
        name: "Makeup name 3",
        price: 100,
        img: makeup,
      },
      {
        id: 58,
        name: "Makeup name 4",
        price: 100,
        img: makeup,
      },
      {
        id: 59,
        name: "Makeup name 5",
        price: 100,
        img: makeup,
      },
      {
        id: 60,
        name: "Makeup name 6",
        price: 100,
        img: makeup,
      },
      {
        id: 61,
        name: "Makeup name 7",
        price: 100,
        img: makeup,
      },
      {
        id: 62,
        name: "Makeup name 8",
        price: 100,
        img: makeup,
      },
    ],
    searchProducts: [],
  },
  reducers: {
    searchProducts: (state, action) => {
      const searchText = action.payload;
      state.searchResults = state.productsList.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
    },
  },
});

export default parfumeryItemsSlice.reducer;
export const { searchProducts } = parfumeryItemsSlice.actions;
