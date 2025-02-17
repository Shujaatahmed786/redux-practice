import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import PizzaComponent from "./components/pizzaComponent";
import User from "./components/user";

function App() {
  return (
    <Provider store={store}>
      <PizzaComponent />
      <User />
    </Provider>
  );
}

export default App;
