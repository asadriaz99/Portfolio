import React from 'react';
import { motion } from 'framer-motion';

function MyJourney() {
  return (
    <motion.section
      className="bg-transparent text-white py-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 " id='about'>
        {/* Section Intro */}
        <div className="mb-16">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
            <span className="text-sm text-white font-medium uppercase">DEVELOPMENT JOURNEY</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            I am also a enthusiastic web developer based in Karachi Pakistan, with a rich experience of over 2 years in website & product design.
          </h1>
          <h2 className="text-2xl font-bold text-sky-400 mb-6">
            I design professional & <br className="sm:hidden" /> beautiful websites
          </h2>
        </div>

        {/* Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-300 text-base leading-relaxed">
          <p>
            With years of experience in graphic and web design I have mastered the skills of understanding client requirements
            according to the latest trends. I have worked with businesses from different niches while freelancing so you can rely on me for yours.
          </p>
          <p>
            I’ve spent most of my time working across different areas of design like front-end development, landing pages, email design,
            app UI/UX, to my current role designing products for mobile platforms. Having worked on various projects,
            I can help you with the best possible suggestions and ideas that we can proceed with. With me, you aren’t forced to accept anything.
            I give you a variety of options we can work on together.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default MyJourney;
