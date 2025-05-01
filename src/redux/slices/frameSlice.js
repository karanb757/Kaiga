import { createSlice } from "@reduxjs/toolkit";

const frameSlice = createSlice({
  name: "frames",
  initialState: {
    frames: null,
  },
  reducers: {
    setFrames: (state, action) => {
      state.frames = action.payload;
    },
    appendFrames: (state, action) => {
      state.frames = [...state.frames, ...action.payload];
    },
  },
});

export const { setFrames, appendFrames } = frameSlice.actions;

export default frameSlice.reducer;
