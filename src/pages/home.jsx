import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './home.css';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div 
      className="home shadow-2xl" 
      id="home" 
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="overlay flex flex-col items-center justify-center p-5"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full max-w-6xl space-y-4 text-center">
          <div className="w-full border-b border-gray-300 pb-2 text-center text-4xl text-gray-300 md:text-7xl">
            <span className="font-semibold">Даниил</span>{' '}
            <span className="font-thin">Макаров</span>
          </div>
          <div className="flex flex-col items-center justify-center space-x-4 text-lg md:flex-row md:text-2xl">
            <div className="font-bold text-gray-300">
              Front-End Developer <span className="font-thin text-white"></span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative h-8 w-10 md:h-10">
                {/* Здесь можно добавить иконки или другие элементы */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

