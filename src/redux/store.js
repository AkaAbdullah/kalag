import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";

export const store = configureStore({
  reducer: {
    menuSlice,
  },
});
