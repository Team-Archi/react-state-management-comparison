import { createSlice } from "@reduxjs/toolkit";
import { getHotCoffees } from "../lib/api";

export const coffeeSlice = createSlice({
  name: "coffee",
  initialState: {
    coffees: [],
  },
  reducers: {
    // getCoffees: (state, payload) => {
    //   state.coffees = payload;
    // },
  },
  extraReducers: {
    [getHotCoffees.fulfilled]: (state, { payload }) => {
      state.coffees = payload
    },
  },
});

export const { getCoffees } = coffeeSlice.actions;

export default coffeeSlice.reducer;
