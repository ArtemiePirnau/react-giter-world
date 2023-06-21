import { createSlice } from "@reduxjs/toolkit";

const aboutItemsSlice = createSlice({
  name: "aboutItems",
  initialState: {
    aboutItems: [
      {
        id: 0,
        title: "Качество",
        width: 480,
      },
      {
        id: 1,
        title: "Аромат",
        width: 480,
      },
      {
        id: 2,
        title: "Цена",
        width: 256,
      },
    ],
  },
  reducers: {},
});

export default aboutItemsSlice.reducer;
