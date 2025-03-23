import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./slices/citiesSlice";

export const store = configureStore({
  reducer: {
    setCity: citiesReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

