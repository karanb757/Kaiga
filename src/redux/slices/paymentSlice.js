// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    payment: null,
  },
  reducers: {
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    resetPyament: (state) => {
      state.payment = null;
    },
  },
});

export const { setPayment, resetPyament } = paymentSlice.actions;

export default paymentSlice.reducer;