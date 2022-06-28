import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleItem: [],
};

export const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    canvasState: (state, { payload }) => {
      state.singleItem = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { canvasState } = globalSlice.actions;

export default globalSlice.reducer;
