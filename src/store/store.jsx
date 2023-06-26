import { configureStore } from "@reduxjs/toolkit";

import parfumeryListReducer from "../reducer/parfumeryListSlice.jsx";
import servicesItemsReducer from "../reducer/servicesItemsSlice.jsx";
import cosmeticsListReducer from "../reducer/cosmeticsListSlice.jsx";
import makeupItemsReducer from "../reducer/makeupListSlice.jsx";
import bodycareItemsReducer from "../reducer/bodycareItemsSlice.jsx";
import facecareItemsReducer from "../reducer/facecareItemsSlice.jsx";
import manItemsReducer from "../reducer/manItemsSlice.jsx";
import womanItemsReducer from "../reducer/womanItemsSlice.jsx";
import unisexItemsReducer from "../reducer/unisexItemsSlice.jsx";

export const store = configureStore({
  reducer: {
    parfumeryList: parfumeryListReducer,
    servicesItems: servicesItemsReducer,
    cosmeticsList: cosmeticsListReducer,
    makeupList: makeupItemsReducer,
    bodycareList: bodycareItemsReducer,
    facecareList: facecareItemsReducer,
    manList: manItemsReducer,
    womanList: womanItemsReducer,
    unisexList: unisexItemsReducer,
  },
});
