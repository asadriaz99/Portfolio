import React from 'react';
import { motion } from 'framer-motion';

const whyItems = [
  {
    title: 'Tailored Design',
    description:
      'I believe that every brand is unique and deserves a website that is just as distinctive.',
  },
  {
    title: 'User-Centric Approach',
    description:
      'With a strong focus on user experience, I design websites that are intuitive and easy to navigate.',
  },
  {
    title: 'Trending Technologies',
    description:
      'I stay at the forefront of web design trends and technologies to offer you the most innovative solutions.',
  },
];

function WhyWorkWithMe() {
  return (
    <motion.div
      className="min-h-1/2 text-white overflow-hidden relative"
      initial="hidden"
      animate="visible"
      id="why-work"
    >
      <div className="container mx-auto px-4 py-16 relative z-10">

        {/* Label */}
        <div className="w-3 h-3 bg-pink-500 rounded-full inline-flex mr-2"></div>
        <span className="text-sm font-medium">WHY ME?</span>

        {/* Header */}
        <motion.header className="text-left mb-16">
          <h1 className="text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Why Work with Me
          </h1>
        </motion.header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white bg-opacity-10 text-white rounded-2xl p-8 shadow-lg backdrop-blur-md min-h-[280px] flex flex-col justify-center items-center text-center"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(192, 132, 252, 0.5)' }} // pink hover glow
            >
              {/* Pink Circle Icon */}
              <div className="w-4 h-4 bg-pink-500 rounded-full mb-6"></div>

              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-base text-white/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default WhyWorkWithMe;
