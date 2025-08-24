import { useReducer, type ReactNode } from 'react';
import { PizzaContext } from './PizzaContext';
import pizzaReducer, { initialPizza } from './pizzaReducer';

interface PizzaProviderProps {
  children: ReactNode;
}

export default function PizzaProvider({ children }: PizzaProviderProps) {
  const [state, dispatch] = useReducer(pizzaReducer, initialPizza);

  return (
    <PizzaContext.Provider value={{
      state,
      dispatch,
    }}>
      {children}
    </PizzaContext.Provider>
  );
}
