import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./features/index";

export const store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});
