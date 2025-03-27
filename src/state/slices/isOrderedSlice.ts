// activate the slice once the user clicks on a add to cart button

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../state";

interface IsOrderedState {
  isOrdered: boolean;
}

const initialState: IsOrderedState = {
  isOrdered: false,
};

export const isOrderedSlice = createSlice({
  name: "isOrdered",
  initialState,
  reducers: {
    setIsOrdered: (state, action: PayloadAction<boolean>) => {
      state.isOrdered = action.payload;
    },
  },
});

export const { setIsOrdered } = isOrderedSlice.actions;
export default isOrderedSlice.reducer;

export const selectedIsOrdered = (state: RootState) =>
  state.setIsOrdered.isOrdered;
