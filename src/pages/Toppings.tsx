import { useReducer } from 'react';
import pizzaReducer, { initialPizza } from '../hooks/pizzaReducer';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Toppings() {
  const toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  const [state, dispatch] = useReducer(pizzaReducer, initialPizza);

  const handleToggleTopping = (topping: string) => {
    console.log("handleAddBase");
    dispatch({
      type: "TOGGLE_TOPPING",
      payload: topping,
    })
  }

  return (
    <div className="max-w-[400px] my-10 mx-auto py-10 text-white">
      <h3 className='text-white text-2xl border-b-1 border-b-white/30 pb-3 mb-4'>
        Choose Your Toppings
      </h3>
      <ul className='text-white mb-8'>
        {
          toppings.map((topping, ind) =>
            <motion.li
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "#f8e112"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              key={topping + ind}
              onClick={() => handleToggleTopping(topping)}
              className='py-3 cursor-pointer'
            >
              <span
                className={
                  state.toppings.includes(topping)
                    ? "topping-span active-span"
                    : "topping-span"
                }
              >
                {topping}
              </span>
            </motion.li>
          )
        }
      </ul>
      <div className='my-8'>
        <Link to="/order">
          <motion.button
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 6px rgb(255, 255, 255)",
              boxShadow: "0px 0px 6px rgb(255, 255, 255)"
            }}
            className='custom-button py-1 px-6'>
            Order
          </motion.button>
        </Link>
      </div>
    </div>
  )
}
