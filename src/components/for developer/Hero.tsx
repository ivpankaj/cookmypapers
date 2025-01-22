import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-20 text-center text-purple-400">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-4"
      >
        Cooking Up Code, Serving Hot Websites 🍳💻
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl mb-8"
      >
        Delicious designs, mouth-watering functionality, all at prices that would not burn your budget! 🔥💰
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-purple-600 text-white px-8 py-4 rounded-3xl text-xl font-semibold hover:bg-purple-700 transition duration-300"
      >
        Get a Free Quote 🚀
      </motion.button>
    </section>
  )
}

