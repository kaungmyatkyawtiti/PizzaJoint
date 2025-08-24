import { useContext } from 'react';
import { PizzaContext } from '../hooks/PizzaContext';

export default function Order() {
  const { state, dispatch } = useContext(PizzaContext);

  return (
    <div>
      Order Page
      <span>{state.base}</span>
      <span>{state.toppings}</span>
    </div>
  )
}
