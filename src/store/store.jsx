import { configureStore } from "@reduxjs/toolkit";

import questionsReducer from "../reducer/questionsSlice.jsx";
import aboutItemsReducer from "../reducer/aboutItemsSlice.jsx";
import productsListReducer from "../reducer/productsListSlice.jsx";
import servicesItemsReducer from "../reducer/servicesItemsSlice.jsx";
import parfumeryReducer from "../reducer/parfumerySlice.jsx";
import cosmeticsReducer from "../reducer/cosmeticsSlice.jsx";

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    aboutItems: aboutItemsReducer,
    productsList: productsListReducer,
    servicesItems: servicesItemsReducer,
    parfumery: parfumeryReducer,
    cosmetics: cosmeticsReducer,
  },
});
