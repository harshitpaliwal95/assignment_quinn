import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleItem: [
    {
      id: 0,
      top: 20,
      left: 80,
      title: "Double click",
      type: "button",
      width: "13rem",
      height: "3rem",
    },
    {
      id: 1,
      top: 180,
      left: 20,
      title: "Type Enter",
      type: "text-field",
      height: "2rem",
      width: "13rem",
    },
  ],
};

export const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    canvasState: (state, { payload }) => {
      state.singleItem = payload;
    },
    editText: (state, { payload }) => {
      const arr = state.singleItem.map((item) => {
        const newObj = Object.assign({}, item);
        if (newObj.id === payload.id) {
          newObj["title"] = payload.text;
        }
        return newObj;
      });
      state.singleItem = arr;
    },
    updateComp: (state, { payload }) => {
      const index = state.singleItem.findIndex(
        (item) => item.id === payload.id
      );
      if (index !== -1) {
        state.singleItem[index].top = payload.top;
        state.singleItem[index].left = payload.left;
      } else {
        state.singleItem.push({
          id: state.singleItem.length + 1,
          top: payload.top,
          left: payload.left,
          type: payload.type,
          height: "2.2rem",
          width: "13rem",
          title: "Button/Text",
        });
      }
    },
    reSizeComp: (state, { payload }) => {
      const index = state.singleItem.findIndex(
        (item) => item.id === payload.id
      );
      state.singleItem[index].height = payload.height;
      state.singleItem[index].width = payload.width;
    },
  },
});

// Action creators are generated for each case reducer function
export const { canvasState, editText, updateComp, reSizeComp } =
  globalSlice.actions;

export default globalSlice.reducer;
