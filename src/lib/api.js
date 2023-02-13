import { createAsyncThunk } from "@reduxjs/toolkit";

const ENDPOINT = "https://api.sampleapis.com/coffee/hot";

export const getHotCoffees = createAsyncThunk("GET_COFFEES", async () => {
  const res = await fetch(ENDPOINT, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
});

export const getCartoons = async () => {
  const ENDPOINT = "https://api.sampleapis.com/cartoons/cartoons2D";
  const res = await fetch(ENDPOINT, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json()
};
