import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./slices/citiesSlice";
import orderReducer from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    setCity: citiesReducer,
    setOrder: orderReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
