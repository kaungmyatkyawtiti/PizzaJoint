import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{ delay: 1, duration: 1 }}
      className="max-w-[900px] text-center my-10 mx-auto py-10 text-white"
    >
      <motion.h2
        initial={{ scale: 1 }}
        animate={{ scale: 1.5, }}
        className="text-xl sm:text-2xl md:text-3xl mb-8 text-white"
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 6px rgb(255, 255, 255)",
            boxShadow: "0px 0px 6px rgb(255, 255, 255)"
          }}
          className='custom-button text-white px-9 py-3 mx-4 my-10'>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}
