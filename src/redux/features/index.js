import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const ProductSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addItem(state, action) {
      const updateItem = [...state.cartItems];
      const itemIndex = updateItem.findIndex((i) => i.id === action.payload.id);

      if (itemIndex < 0) {
        let tempProduct = { ...action.payload, quantity: 1 };
        updateItem.push(tempProduct);
      } else {
        const updatedCart = { ...updateItem[itemIndex] };
        updatedCart.quantity++;
        updateItem[itemIndex] = updatedCart;
      }
      return {
        ...state,
        cartItems: updateItem,
      };
    },
    removeItem(state, action) {
      const updateItem = [...state.cartItems];
      const itemIndex = updateItem.findIndex((i) => i.id === action.payload.id);
      const updateCart = { ...updateItem[itemIndex] };

      if (updateCart.quantity === 1) {
        const filterItem = updateItem.filter((i) => i.id !== action.payload.id);

        return {
          ...state,
          cartItems: filterItem,
        };
      } else {
        updateCart.quantity--;
        updateItem[itemIndex] = updateCart;

        return {
          ...state,
          cartItems: updateItem,
        };
      }
    },
    
  },
});

export const { addItem, removeItem } = ProductSlice.actions;
export default ProductSlice.reducer;
