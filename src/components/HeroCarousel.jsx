import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const HeroContainer = styled.div`
  position: relative;
  height: 90vh;
  overflow: hidden;
`;

const Slide = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const slides = [
  {
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600",
    title: "Empowering Communities",
    subtitle: "Building a better future together"
  },
  {
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600",
    title: "Supporting Education",
    subtitle: "Creating opportunities for every child"
  },
  {
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600",
    title: "Healthcare for All",
    subtitle: "Ensuring access to quality healthcare"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <HeroContainer>
      <AnimatePresence mode="wait">
        <Slide
          key={current}
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Content>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8"
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#donate"
                className="bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition duration-300 inline-block"
              >
                Make a Difference Today
              </a>
            </motion.div>
          </Content>
        </Slide>
      </AnimatePresence>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </HeroContainer>
  );
}