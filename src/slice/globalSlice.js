import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  randomId: 0,
  signleItem: null,
};

export const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getRandom: (state) => {
      state.randomId = state.randomId + 1;
    },
    setSingleItem: (state, { payload }) => {
      state.signleItem = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getRandom, setSingleItem } = globalSlice.actions;

export default globalSlice.reducer;
