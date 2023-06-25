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
      // Unisex items
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
      // Man Items
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
      // Bodycare
      {
        id: 0,
        name: "Bodycare name 0",
        price: 100,
        img: bodycare,
      },
      {
        id: 1,
        name: "Bodycare name 1",
        price: 100,
        img: bodycare,
      },
      {
        id: 2,
        name: "Bodycare name 2",
        price: 100,
        img: bodycare,
      },
      {
        id: 3,
        name: "Bodycare name 3",
        price: 100,
        img: bodycare,
      },
      {
        id: 4,
        name: "Bodycare name 4",
        price: 100,
        img: bodycare,
      },
      {
        id: 5,
        name: "Bodycare name 5",
        price: 100,
        img: bodycare,
      },
      {
        id: 6,
        name: "Bodycare name 6",
        price: 100,
        img: bodycare,
      },
      {
        id: 7,
        name: "Bodycare name 7",
        price: 100,
        img: bodycare,
      },
      {
        id: 8,
        name: "Bodycare name 8",
        price: 100,
        img: bodycare,
      },
      // Facecare items
      {
        id: 0,
        name: "Facecare name 0",
        price: 100,
        img: facecare,
      },
      {
        id: 1,
        name: "Facecare name 1",
        price: 100,
        img: facecare,
      },
      {
        id: 2,
        name: "Facecare name 2",
        price: 100,
        img: facecare,
      },
      {
        id: 3,
        name: "Facecare name 3 ",
        price: 100,
        img: facecare,
      },
      {
        id: 4,
        name: "Facecare name 4",
        price: 100,
        img: facecare,
      },
      {
        id: 5,
        name: "Facecare name 5",
        price: 100,
        img: facecare,
      },
      {
        id: 6,
        name: "Facecare name 6",
        price: 100,
        img: facecare,
      },
      {
        id: 7,
        name: "Facecare name 7",
        price: 100,
        img: facecare,
      },
      {
        id: 8,
        name: "Facecare name 8",
        price: 100,
        img: facecare,
      },
      // Make up items
      {
        id: 0,
        name: "Makeup name 0",
        price: 100,
        img: makeup,
      },
      {
        id: 1,
        name: "Makeup name 1",
        price: 100,
        img: makeup,
      },
      {
        id: 2,
        name: "Makeup name 2",
        price: 100,
        img: makeup,
      },
      {
        id: 3,
        name: "Makeup name 3",
        price: 100,
        img: makeup,
      },
      {
        id: 4,
        name: "Makeup name 4",
        price: 100,
        img: makeup,
      },
      {
        id: 5,
        name: "Makeup name 5",
        price: 100,
        img: makeup,
      },
      {
        id: 6,
        name: "Makeup name 6",
        price: 100,
        img: makeup,
      },
      {
        id: 7,
        name: "Makeup name 7",
        price: 100,
        img: makeup,
      },
      {
        id: 8,
        name: "Makeup name 8",
        price: 100,
        img: makeup,
      },
    ],
  },
  reducers: {},
});

export default parfumeryItemsSlice.reducer;
