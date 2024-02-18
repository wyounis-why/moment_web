import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/UserSlice";

const store = configureStore({
  reducer: {
    auth: userReducer,
  },
});

export default store;
