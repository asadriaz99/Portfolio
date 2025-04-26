// AccentBackground.js
import React from 'react';
import { motion } from 'framer-motion';

const getRandomShape = () => {
  const shapes = [
    'rounded-none', // sharp square
    'rounded-md',   // slightly rounded
    'rotate-45',    // diamond (rotated square)
    'rounded-sm',   // slightly sharper
  ];
  return shapes[Math.floor(Math.random() * shapes.length)];
};

const getRandomColor = () => {
  const colors = [
    'border-cyan-400',
    'border-blue-500',
    'border-teal-300',
    'border-purple-400',
    'border-indigo-400',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const AccentBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => {
        const size = Math.random() * 80 + 40;
        const shapeClass = getRandomShape();
        const colorClass = getRandomColor();
        return (
          <motion.div
            key={`tech-shape-${i}`}
            className={`absolute ${shapeClass} border ${colorClass} opacity-30`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'drop-shadow(0 0 6px currentColor)',
            }}
            animate={{
              x: [0, Math.random() * 150 - 75],
              y: [0, Math.random() * 150 - 75],
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
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
