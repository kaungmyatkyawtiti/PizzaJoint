import { useContext } from 'react';
import { PizzaContext } from '../hooks/PizzaContext';

export default function Order() {
  const { state } = useContext(PizzaContext);

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8 md:p-10 my-12">

      <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">
        Thank you for your order! 🍕
      </h2>

      <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-center">
        You ordered a <span className="font-semibold">{state.base}</span> pizza with:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {state.toppings.map((topping) => (
          <div
            key={topping}
            className="border rounded-full py-2 px-4 font-medium text-center hover:scale-105 transition-transform cursor-pointer"
          >
            {topping}
          </div>
        ))}
      </div>

    </div>
  );
}
