import { motion } from 'framer-motion'

const plans = [
  { name: 'Appetizer', price: 499, features: ['Basic Website', 'Responsive Design', '3 Pages', 'Contact Form'] },
  { name: 'Main Course', price: 999, features: ['Custom Website', '5 Pages', 'CMS Integration', 'Basic SEO', 'E-commerce (up to 20 products)'] },
  { name: 'Chef\'s Special', price: 1999, features: ['Advanced Custom Website', 'Unlimited Pages', 'Advanced SEO', 'E-commerce (unlimited products)', 'Custom Functionality'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Menu 🍽️</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">${plan.price}</p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">✅ {feature}</li>
                ))}
              </ul>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                Order Now 🍽️
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

