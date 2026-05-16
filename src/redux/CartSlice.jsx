import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
      state.totalQuantity += 1;
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const item = state.cartItems.find(
        item => item.id === action.payload.id
      );

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
