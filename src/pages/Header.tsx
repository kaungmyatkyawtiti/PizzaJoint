import PizzaLogo from '../components/PizzaLogo';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header
      className='flex items-center p-8'
    >
      <div
        className="mr-5"
      >
        <PizzaLogo />
      </div>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 130 }}
        className="grow ml-2 text-xl text-white"
      >
        <h1
          className='border-b-1 border-b-white/30 pb-3'
        >
          Pizza Joint
        </h1>
      </motion.div>
    </header>
  )
}
