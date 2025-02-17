import {
  ADD_PIZZA,
  ORDER_PIZZA,
  MULTIPLY_PIZZA,
} from "../actions/pizzaActions";

const initialState = {
  pizzaBase: 100,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };
    case ADD_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase + 2,
      };
    case MULTIPLY_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase * 0,
      };
    default:
      return state;
  }
};

export default pizzaReducer;
