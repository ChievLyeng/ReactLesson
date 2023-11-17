import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/userSlice";
import { productReducer } from "./slices/productSlice";
import { orderReducer } from "./slices/orderSlice";


export const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productReducer,
    orders: orderReducer
  },
});

export * from "./thunks/fetchUser";
export * from "./thunks/fetchProduct";
export * from "./thunks/fetchOrder";