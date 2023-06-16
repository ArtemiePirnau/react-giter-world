import { configureStore } from "@reduxjs/toolkit";

import questionsReducer from "../reducer/questionsSlice.jsx";
import aboutItemsReducer from "../reducer/aboutItemsSlice.jsx";
import parfumeryListReducer from "../reducer/parfumeryListSlice.jsx";
import servicesItemsReducer from "../reducer/servicesItemsSlice.jsx";
import parfumeryReducer from "../reducer/parfumerySlice.jsx";
import cosmeticsReducer from "../reducer/cosmeticsSlice.jsx";
import cosmeticsListReducer from "../reducer/cosmeticsListSlice.jsx";
export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    aboutItems: aboutItemsReducer,
    parfumeryList: parfumeryListReducer,
    servicesItems: servicesItemsReducer,
    parfumery: parfumeryReducer,
    cosmetics: cosmeticsReducer,
    cosmeticsList: cosmeticsListReducer,
  },
});
