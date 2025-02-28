import { combineReducers } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzaReducers";
import userReducer from "./user";

export default combineReducers({
  pizzaReducer,
  userReducer,
});
