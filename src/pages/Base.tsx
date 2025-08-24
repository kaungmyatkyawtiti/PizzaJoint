import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PizzaContext } from '../hooks/PizzaContext';

export default function Base() {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  const { state, dispatch } = useContext(PizzaContext);

  const handleAddBase = (base: string) => {
    console.log("handleAddBase");
    dispatch({
      type: "SET_BASE",
      payload: base,
    })
  }

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.5 }}
      className="max-w-[500px] my-10 mx-auto py-10 text-white"
    >
      <h3 className='text-white text-2xl border-b-1 border-b-white/30 pb-3 mb-4'>
        Choose Your Base
      </h3>
      <ul className='text-white mb-10'>
        {
          bases.map((base, ind) =>
            <motion.li
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "#f8e112"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              key={base + ind}
              onClick={() => handleAddBase(base)}
              className='py-3 cursor-pointer'
            >
              <span
                className={
                  state.base === base
                    ? "topping-span active-span"
                    : "topping-span"
                }
              >
                {base}
              </span>
            </motion.li>
          )
        }
      </ul>
      {
        state.base && (
          <motion.div
            className='my-10'
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Link to="/toppings">
              <motion.button
                whileHover={{
                  scale: 1.2,
                  textShadow: "0px 0px 6px rgb(255, 255, 255)",
                  boxShadow: "0px 0px 6px rgb(255, 255, 255)"
                }}
                className='custom-button py-1 px-6'>
                Next
              </motion.button>
            </Link>
          </motion.div>
        )
      }
    </motion.div>
  )
}
