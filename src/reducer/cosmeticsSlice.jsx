import img from "../../public/images/one-product.jpg";
import { createSlice } from "@reduxjs/toolkit";

const cosmeticsSlice = createSlice({
  name: "cosmetics",
  initialState: {
    cosmetics: [
      {
        id: 0,
        label: "Makeup",
        img: img,
        to: "/makeup",
      },
      {
        id: 1,
        label: "Body Care",
        img: img,
        to: "/body-care",
      },
      {
        id: 2,
        label: "Face Care",
        img: img,
        to: "/face-care",
      },
    ],
  },
});
export default cosmeticsSlice.reducer;
