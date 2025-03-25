import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../state";

// User's order
// type -> pizza | snacks | combo | Cocktails | Drinks | Desserts | Sauces -> etc
type product = "pizza" | "snacks" | "combo" | "cocktails" | "drinks" | null;

interface OrderState {
  type: product;
  data: {
    image: string;
    name: string;
    quantity: number;
    dough?: string; // type of pizza's dough
    size?: string; // if it's a snack or a pizza the field is non-empty
    weight?: string; // for pizza and snacks the weight is in grams, for drinks the weight is in ml
  };
}

const initialState: { orderState: OrderState[] } = {
  orderState: [
    {
      type: null,
      data: {
        image: "",
        name: "",
        quantity: 0,
        dough: "",
        size: "",
        weight: "",
      },
    },
  ],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<OrderState>) => {
      state.orderState.push(action.payload);
    },
  },
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;

export const selectedOrder = (state: RootState) => state.setOrder.orderState;
