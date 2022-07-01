import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  canvasItem: [
    {
      id: 0,
      top: 20,
      left: 80,
      title: "Double click",
      type: "button",
      width: "13rem",
      height: "3rem",
      colorClass: "basic",
    },
    {
      id: 1,
      top: 180,
      left: 20,
      title: "Type Enter",
      type: "text-field",
      height: "2rem",
      width: "13rem",
      colorClass: "basic",
    },
  ],
};

export const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    canvasState: (state, { payload }) => {
      state.canvasItem = payload;
    },
    editText: (state, { payload }) => {
      const arr = state.canvasItem.map((item) => {
        const newObj = Object.assign({}, item);
        if (newObj.id === payload.id) {
          newObj["title"] = payload.text;
        }
        return newObj;
      });
      state.canvasItem = arr;
    },
    updatePosition: (state, { payload }) => {
      const index = state.canvasItem.findIndex(
        (item) => item.id === payload.id
      );
      if (index !== -1) {
        state.canvasItem[index].top = payload.top;
        state.canvasItem[index].left = payload.left;
      } else {
        state.canvasItem.push({
          id: state.canvasItem.length + 1,
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
      const index = state.canvasItem.findIndex(
        (item) => item.id === payload.id
      );
      state.canvasItem[index].height = payload.height;
      state.canvasItem[index].width = payload.width;
    },
    changeColor: (state, { payload }) => {
      const index = state.canvasItem.findIndex(
        (item) => item.id === payload.id
      );
      state.canvasItem[index].colorClass = payload.colorClass;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  canvasState,
  editText,
  updatePosition,
  reSizeComp,
  changeColor,
} = globalSlice.actions;

export default globalSlice.reducer;
