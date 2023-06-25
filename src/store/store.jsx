import { configureStore } from "@reduxjs/toolkit";

// import questionsReducer from "../reducer/questionsSlice.jsx";
// import aboutItemsReducer from "../reducer/aboutItemsSlice.jsx";
import parfumeryListReducer from "../reducer/parfumeryListSlice.jsx";
import servicesItemsReducer from "../reducer/servicesItemsSlice.jsx";
import parfumeryReducer from "../reducer/parfumerySlice.jsx";
import cosmeticsReducer from "../reducer/cosmeticsSlice.jsx";
import cosmeticsListReducer from "../reducer/cosmeticsListSlice.jsx";
import makeupItemsReducer from "../reducer/makeupListSlice.jsx";
import bodycareItemsReducer from "../reducer/bodycareItemsSlice.jsx";
import facecareItemsReducer from "../reducer/facecareItemsSlice.jsx";
import manItemsReducer from "../reducer/manItemsSlice.jsx";
import womanItemsReducer from "../reducer/womanItemsSlice.jsx";
import unisexItemsReducer from "../reducer/unisexItemsSlice.jsx";

export const store = configureStore({
  reducer: {
    // questions: questionsReducer,
    //aboutItems: aboutItemsReducer,
    parfumeryList: parfumeryListReducer,
    servicesItems: servicesItemsReducer,
    parfumery: parfumeryReducer,
    cosmetics: cosmeticsReducer,
    cosmeticsList: cosmeticsListReducer,
    // Acestea 6 de comentat de jos
    makeupList: makeupItemsReducer,
    bodycareList: bodycareItemsReducer,
    facecareList: facecareItemsReducer,
    manList: manItemsReducer,
    womanList: womanItemsReducer,
    unisexList: unisexItemsReducer,
  },
});
