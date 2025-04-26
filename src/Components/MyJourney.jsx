import React from 'react';
import { motion } from 'framer-motion';

function MyJourney() {
  return (
    <motion.section
      className="min-h-screen bg-transparent text-white flex items-center py-20 px-4 sm:px-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="about"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center mb-4 justify-center md:justify-start">
            <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
            <span className="text-sm text-white font-medium uppercase tracking-wider">
              DEVELOPMENT JOURNEY
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6 text-center md:text-left">
            I am also an enthusiastic web developer based in Karachi, Pakistan, with over 2 years of rich experience in website & product design.
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-400 mb-6 text-center md:text-left">
            I design professional & <br className="sm:hidden" /> beautiful websites
          </h2>
        </div>

        {/* Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-300 text-base leading-relaxed">
          <p>
            With years of experience in graphic and web design, I have mastered the skills of understanding client requirements according to the latest trends. I have worked with businesses from different niches while freelancing, so you can rely on me for yours.
          </p>
          <p>
            I’ve spent most of my time working across different areas of design like front-end development, landing pages, email design, app UI/UX, to my current role designing products for mobile platforms. Having worked on various projects, I can help you with the best possible suggestions and ideas that we can proceed with. With me, you aren’t forced to accept anything — I offer a variety of creative options we can explore together.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default MyJourney;
