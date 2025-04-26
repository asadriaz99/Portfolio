import React from 'react';
import { motion } from 'framer-motion';

const workflowSteps = [
  {
    title: 'Discovery',
    description:
      'I dive deep into understanding your brand, goals, and target audience. Through detailed consultations and research, I gather essential insights that inform the entire design process.',
  },
  {
    title: 'Design',
    description:
      'I begin crafting visually compelling and strategic designs. This step focuses on translating ideas into tangible visual concepts that align with your brand.',
  },
  {
    title: 'Development',
    description:
      'I transform the visuals into a fully functional website. This phase involves meticulous coding and integration to ensure your site is responsive and performs seamlessly across devices.',
  },
  {
    title: 'Launch',
    description:
      'I rigorously test the website to ensure everything functions flawlessly before going live. Post-launch, I provide support and guidance to help you maximize your new online presence.',
  },
];

function CreativeWorkflow() {
  return (
    <motion.div
      className="min-h-screen text-white overflow-hidden relative"
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col lg:flex-row items-start gap-12 sm:gap-16 relative z-10">
        
        {/* Left Heading Section */}
        <div className="lg:w-1/3 w-full px-10 mb-10 lg:mb-0">
          <motion.div 
            className="inline-flex items-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm sm:text-base font-medium">MY PROCESS</span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent animate-pulse leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            My Creative Workflow
          </motion.h1>
          
        </div>

        {/* Right Workflow Steps */}
        <div className="lg:w-2/3 w-full space-y-8 sm:space-y-12">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              className="border-t border-gray-600 pt-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                {index + 1}. {step.title}
              </h2>
              <p className="text-sm sm:text-base text-white max-w-3xl">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default CreativeWorkflow;
