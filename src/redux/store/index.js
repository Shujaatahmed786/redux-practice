import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "../reducers/pizzaReducers";
import userReducer from "../reducers/user";

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    user: userReducer,
  },
});

export default store;
