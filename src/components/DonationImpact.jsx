import { motion } from 'framer-motion';
import { FaHeart, FaBook, FaMedkit, FaAppleAlt } from 'react-icons/fa';

export default function DonationImpact() {
  const impactItems = [
    {
      amount: "₹2000",
      icon: <FaAppleAlt className="w-8 h-8" />,
      impact: "Provides nutritious meals for a child for one week",
      details: "Your donation ensures children receive balanced, healthy meals essential for their growth and development."
    },
    {
      amount: "₹700",
      icon: <FaBook className="w-8 h-8" />,
      impact: "Supplies educational materials for one student",
      details: "Covers textbooks, notebooks, and essential school supplies for a child's academic year."
    },
    {
      amount: "₹1500",
      icon: <FaMedkit className="w-8 h-8" />,
      impact: "Funds medical check-ups for five children",
      details: "Enables basic health screenings and preventive care for children in need."
    },
    {
      amount: "₹5000",
      icon: <FaHeart className="w-8 h-8" />,
      impact: "Sponsors a child's education for one month",
      details: "Covers tuition, supplies, and additional educational support for comprehensive learning."
    }
  ];

  return (
    <section className="py-16 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Your Donation Makes a Difference</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            See how your contribution can transform children's lives and create lasting impact in communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactItems.map((item, index) => (
            <motion.div
              key={item.amount}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-primary">{item.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-accent mb-2">{item.amount}</h3>
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">{item.impact}</h4>
              <p className="text-neutral-600">{item.details}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#donate"
            className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-colors duration-300"
          >
            Make a Donation Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}