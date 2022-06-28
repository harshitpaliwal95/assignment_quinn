import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signleItem: null,
};

export const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSingleItem: (state, { payload }) => {
      state.signleItem = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSingleItem } = globalSlice.actions;

export default globalSlice.reducer;
