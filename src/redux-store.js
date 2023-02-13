import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counter";
import coffeeSlice from "./modules/coffee";

export default configureStore({
  reducer: {
    counter: counterReducer,
    coffee : coffeeSlice,
  },
});
