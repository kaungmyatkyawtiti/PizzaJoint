export type PizzaState = {
  base: string;
  toppings: string[];
};

export type PizzaAction =
  | { type: "SET_BASE"; payload: string }
  | { type: "TOGGLE_TOPPING"; payload: string }
  | { type: "RESET" };

export const initialPizza: PizzaState = {
  base: "",
  toppings: []
};

export default function pizzaReducer(
  state: PizzaState,
  action: PizzaAction
): PizzaState {

  switch (action.type) {
    case "SET_BASE": {
      return {
        ...state,
        base: action.payload
      };
    }
    case "TOGGLE_TOPPING": {
      // if (state.toppings.includes(action.payload)) {
      //   return {
      //     ...state,
      //     toppings: state.toppings.filter(t => t !== action.payload),
      //   };
      // }
      // return {
      //   ...state,
      //   toppings: [
      //     ...state.toppings,
      //     action.payload
      //   ],
      // };

      const exists = state.toppings.includes(action.payload);

      const newToppings = exists
        ? state.toppings.filter(t => t !== action.payload) // remove
        : [action.payload, ...state.toppings];             // add

      return {
        ...state,
        toppings: newToppings
      };
    }
    case "RESET": {
      return initialPizza;
    }
    default: {
      return state;
    }
  }
}
