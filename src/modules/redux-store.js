import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import coffeeSlice from "./coffee";

export default configureStore({
  reducer: {
    counter: counterReducer,
    coffee : coffeeSlice,
  },
});
