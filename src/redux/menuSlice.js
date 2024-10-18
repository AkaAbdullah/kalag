import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: false,
};

export const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    handleNav: (state) => {
      state.navOpen = !state.navOpen;
    },
  },
});
export const { handleNav } = menuSlice.actions;
export default menuSlice.reducer;
