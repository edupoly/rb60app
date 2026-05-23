import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderedItems: [],
};
export const billingSlice = createSlice({
  name: "billingSlice",
  initialState,
  reducers: {
    addToBilling: (state, action) => {
      state.orderedItems.push(action.payload);
    },
  },
});

export const { addToBilling } = billingSlice.actions;
const billingReducer = billingSlice.reducer;
export default billingReducer;
