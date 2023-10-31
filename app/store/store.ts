import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import loaderReducer from "./loadersSlice";

export const store = configureStore({
  reducer: {
    userReducer,
    loaderReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
