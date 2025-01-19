import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type FAQ = {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  { question: 'How long does it take to cook up a website?', answer: 'Our chefs work fast! Most projects are ready to serve in 2-4 weeks, depending on the complexity of the dish.' },
  { question: 'Can you work with my existing brand recipe?', answer: 'We\'ll blend your brand seamlessly into the new website batter.' },
  { question: 'Do you offer website maintenance plans?', answer: 'Yes, we offer various "Keep It Fresh" plans to ensure your website stays hot and ready to serve!' },
  { question: 'What if I need changes after the website is live?', answer: 'No worries! We offer a 30-day adjustment period to fine-tune your digital dish to perfection.' },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions 🤔</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

type FAQItemProps = {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden">
      <button
        className="flex justify-between items-center w-full text-left font-semibold py-3 px-5 bg-purple-200 hover:bg-purple-300 focus:outline-none transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl">{question}</span>
        <span className="text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-5 py-3 text-gray-700"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
