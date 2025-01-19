import { motion } from 'framer-motion'

const services = [
  { icon: '🌐', title: 'Web Development', description: 'Custom websites that sizzle with style and functionality' },
  { icon: '📱', title: 'Mobile Apps', description: 'Tasty apps that users will eat right up' },
  { icon: '🛒', title: 'E-commerce Solutions', description: 'Online stores that serve up sales like hotcakes' },
  { icon: '🤖', title: 'AI Integration', description: 'Spice up your projects with cutting-edge AI technology' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Secret Sauce 🥘</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-purple-100 p-6 rounded-lg text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

