import { motion } from 'framer-motion';
import { FaGraduationCap, FaHospital, FaHome, FaHandHoldingHeart } from 'react-icons/fa';

export default function WhatWeDo() {
  const activities = [
    {
      icon: <FaGraduationCap className="w-12 h-12" />,
      title: "Education Support",
      description: "Providing quality education, school supplies, and scholarships to underprivileged children.",
      stats: "300+ children educated"
    },
    {
      icon: <FaHospital className="w-12 h-12" />,
      title: "Healthcare Services",
      description: "Operating mobile clinics and providing essential healthcare services to remote communities.",
      stats: "500+ patients treated"
    },
    {
      icon: <FaHome className="w-12 h-12" />,
      title: "Shelter Programs",
      description: "Building and renovating homes for families in need of safe housing.",
      stats: "50+ homes built"
    },
    {
      icon: <FaHandHoldingHeart className="w-12 h-12" />,
      title: "Community Support",
      description: "Organizing food drives and providing emergency relief during crises.",
      stats: "10,000+ meals served"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-neutral-900"
        >
          What We Do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary mb-4">{activity.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">{activity.title}</h3>
              <p className="text-neutral-600 mb-4">{activity.description}</p>
              <div className="text-accent font-semibold">{activity.stats}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}