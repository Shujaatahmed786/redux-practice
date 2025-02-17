import { useDispatch, useSelector } from "react-redux";
import { addPizza, multiply, orderPizza } from "../redux/actions/pizzaActions";

const PizzaComponent = () => {
  const dispatch = useDispatch();
  const pizzaBase = useSelector((state) => state.pizzaBase);

  const handleOrder = () => {
    dispatch(orderPizza());
  };

  const handleAdd = () => {
    dispatch(addPizza());
  };

  const handleMulti = () => {
    dispatch(multiply());
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Pizza Base Remaining: {pizzaBase}</h1>
      <div className="flex justify-center items-center gap-4">
        <button onClick={handleOrder}>Order Pizza</button>
        <button onClick={handleAdd}>Add Pizza</button>
        <button onClick={handleMulti}>Multiply Pizza</button>
      </div>
    </div>
  );
};

export default PizzaComponent;
