import { motion } from 'framer-motion'

const testimonials = [
  { name: 'John Doe', role: 'Startup Founder', quote: 'CookMyPapers whipped up a website that\'s the secret ingredient to our success!' },
  { name: 'Jane Smith', role: 'E-commerce Owner', quote: 'Our online store is sizzling with sales thanks to CookMyPapers!' },
  { name: 'Mike Johnson', role: 'Tech Blogger', quote: 'The AI integration CookMyPapers added to my blog is pure genius. It\'s like having a sous-chef for my content!' },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Happy Customers 😋</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="mb-4 italic">&quot;{testimonial.quote}&quot;</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

