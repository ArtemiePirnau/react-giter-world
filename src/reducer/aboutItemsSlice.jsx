import { createSlice } from "@reduxjs/toolkit";

const aboutItemsSlice = createSlice({
  name: "aboutItems",
  initialState: {
    aboutItems: [
      {
        id: 0,
        title: "Quality",
        width: 480,
      },
      {
        id: 1,
        title: "The fragrance",
        width: 480,
      },
      {
        id: 2,
        title: "Price",
        width: 256,
      },
    ],
  },
  reducers: {},
});

export default aboutItemsSlice.reducer;
