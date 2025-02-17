export const ORDER_PIZZA = "ORDER_PIZZA";
export const ADD_PIZZA = "ADD_PIZZA";
export const MULTIPLY_PIZZA = "MULTIPLY_PIZZA";

export const orderPizza = () => {
  return {
    type: ORDER_PIZZA,
    shop_name: "Pizza Shop",
  };
};

export const addPizza = () => {
  return {
    type: ADD_PIZZA,
    shop_name: "Pizza Shop",
  };
};

export const multiply = () => {
  return {
    type: MULTIPLY_PIZZA,
    shop_name: "Pizza Shop",
  };
};
