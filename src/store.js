import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slice/globalSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});
