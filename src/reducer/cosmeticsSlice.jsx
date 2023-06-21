import img from "../../public/images/cosmetics.jpg";
import { createSlice } from "@reduxjs/toolkit";

const cosmeticsSlice = createSlice({
  name: "cosmetics",
  initialState: {
    cosmetics: [
      {
        id: 0,
        label: "Makeup",
        img: img,
        to: "/products-page/cosmetics/makeup",
      },
      {
        id: 1,
        label: "Body Care",
        img: img,
        to: "/products-page/cosmetics/body-care",
      },
      {
        id: 2,
        label: "Face Care",
        img: img,
        to: "/products-page/cosmetics/face-care",
      },
    ],
  },
});
export default cosmeticsSlice.reducer;
