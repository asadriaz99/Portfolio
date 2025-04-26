// AccentBackground.js
import React from 'react';
import { motion } from 'framer-motion';

const getRandomShape = () => {
  const shapes = [
    'rounded-full', // perfect circle
    'rounded-[40%]', // more blob-like
    'rounded-[60%]', // slightly irregular
    'rounded-[50%_30%_40%_70%]', // unique blob shape (tailwind-safe)
  ];
  return shapes[Math.floor(Math.random() * shapes.length)];
};

const AccentBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => {
        const size = Math.random() * 100 + 60;
        const shapeClass = getRandomShape();
        return (
          <motion.div
            key={`blob-${i}`}
            className={`absolute ${shapeClass} bg-purple-500 opacity-20 blur-2xl`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.7))',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};

export default AccentBackground;
