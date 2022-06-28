import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  randomId: 0,
};

export const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getRandom: (state) => {
      state.randomId = state.randomId + 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getRandom } = globalSlice.actions;

export default globalSlice.reducer;
