import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="text-accent mb-4">
        <FaQuoteLeft size={24} />
      </div>
      <p className="text-neutral-800 mb-4">{testimonial.text}</p>
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
          <p className="text-sm text-neutral-600">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}