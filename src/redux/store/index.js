import { configureStore } from "@reduxjs/toolkit";

import reducer from "../reducers/index";

const store = configureStore({
  reducer,
});
console.log(store.getState());

export default store;
