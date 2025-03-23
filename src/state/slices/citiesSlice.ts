import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../state";

interface CitiesState {
  city: string;
}

const initialState: CitiesState = {
  city: "", // no cities are selected by default
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const { setCity } = citiesSlice.actions;
export default citiesSlice.reducer;

export const selectedCity = (state: RootState) => state.setCity.city;
