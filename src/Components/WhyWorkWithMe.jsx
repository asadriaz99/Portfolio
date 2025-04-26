import React from 'react';
import { motion } from 'framer-motion';

const whyItems = [
  {
    title: 'Tailored Design',
    description:
      'Every brand is unique — I craft personalized designs that reflect your brand’s voice, values, and vision. No templates, just custom creativity aligned to your goals.',
  },
  {
    title: 'User-Centric Approach',
    description:
      'User experience is at the heart of everything I create. I design seamless, intuitive journeys that delight visitors, reduce bounce rates, and boost engagement across all devices.',
  },
  {
    title: 'Trending Technologies',
    description:
      'From modern frameworks to cutting-edge animation libraries, I utilize the latest technologies to keep your website fast, visually stunning, and ahead of competitors.',
  },
  {
    title: 'Strategic Thinking',
    description:
      'Beyond aesthetics, I design with a business mindset — creating websites that not only look good but also drive traffic, generate leads, and grow your business sustainably.',
  },
  {
    title: 'Responsive & Fast',
    description:
      'Speed and mobile responsiveness are non-negotiable today. I ensure your website loads in seconds and looks perfect across phones, tablets, and desktops.',
  },
  {
    title: 'Long-Term Partnership',
    description:
      'I believe in building lasting relationships. After project completion, I offer ongoing support, updates, and advice to help you thrive online.',
  },
];

function WhyWorkWithMe() {
  return (
    <motion.div
      className="min-h-screen text-white overflow-hidden relative"
      initial="hidden"
      animate="visible"
      id="why-work"
    >
      <div className="container mx-auto px-4 py-16 relative z-10">

        {/* Label */}
       <div className='px-10'>
       <div className="w-3 h-3 bg-pink-500 rounded-full inline-flex mr-2"></div>
       <span className=" text-sm font-medium">WHY ME?</span>
       </div>

        {/* Header */}
        <motion.header className="text-left px-10 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Why Work with Me
          </h1>
        </motion.header>

        {/* Cards */}
        <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white bg-opacity-10 text-white rounded-2xl p-6 sm:p-8 shadow-lg backdrop-blur-md min-h-[280px] flex flex-col justify-center items-center text-center"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(192, 132, 252, 0.5)' }} // pink hover glow
            >
              {/* Pink Circle Icon */}
              <div className="w-4 h-4 bg-pink-500 rounded-full mb-6"></div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-base text-white/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default WhyWorkWithMe;
