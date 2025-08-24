import { createContext, type Dispatch } from 'react';
import type { PizzaAction, PizzaState } from './pizzaReducer';

interface PizzaContextType {
  state: PizzaState;
  dispatch: Dispatch<PizzaAction>;
};

export const PizzaContext = createContext<PizzaContextType>({} as PizzaContextType);
