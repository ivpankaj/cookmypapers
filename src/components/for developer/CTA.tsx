import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-purple-400">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          Ready to Cook Up Something Amazing? 👨‍🍳✨
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-12"
        >
   Let&apos;s whip up a website that&apos;ll make your competitors&apos; jaws drop!

        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 text-purple-600 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition duration-300"
        >
          Get Your Free Quote Now! 🚀
        </motion.button>
      </div>
    </section>
  )
}

