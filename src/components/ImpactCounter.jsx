import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Lives Impacted', value: 50000, suffix: '+' },
  { label: 'Projects Completed', value: 200, suffix: '+' },
  { label: 'Communities Served', value: 100, suffix: '+' },
  { label: 'Volunteers', value: 1000, suffix: '+' }
];

export default function ImpactCounter() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      stats.forEach((stat, index) => {
        const duration = 2000; // 2 seconds
        const steps = 50;
        const increment = stat.value / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, duration / steps);
      });
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="bg-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-neutral-800 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}