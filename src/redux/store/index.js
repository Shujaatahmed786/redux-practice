import { createStore } from "redux";
import pizzaReducer from "../reducers/pizzaReducers";

const store = createStore(
  pizzaReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// combine reducers
