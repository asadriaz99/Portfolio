import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function GetInTouch() {
  return (
    <motion.div
      className="min-h-1/2 text-white py-20 px-0 sm:px-4" // Adjust padding on small screens (sm:px-4)
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="contact"
    >
      <div className="container px-14 mx-auto text-left">

        {/* Pink Dot and Label */}
        <div className="mb-4 flex items-center justify-start">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium">GET IN TOUCH</span>
        </div>

        {/* Header */}
        <motion.h1
          className="text-4xl py-8 sm:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent animate-pulse" // Adjust header size for small screens
        >
          Let's Work Together!
        </motion.h1>

        <p className="text-white/70 mb-12 max-w-xl text-base sm:text-lg"> {/* Adjust text size for smaller screens */}
          Have a project in mind or just want to say hello? Reach out via email or WhatsApp — I’d love to connect.
        </p>

        {/* Contact Options */}
        <div className="space-y-4">
          <a
            href="mailto:asadriaz88218821@gmail.com"
            className="inline-block bg-white hover:bg-blue-700 transition px-6 py-3 rounded-full text-black font-medium w-full sm:w-auto" // Make button full-width on small devices
          >
            Send an Email
          </a>

          <a
            href="https://wa.me/03272334177"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white hover:bg-green-600 transition px-6 py-3 rounded-full text-black font-medium w-full sm:w-auto" // Make button full-width on small devices
          >
            <FaWhatsapp size={20} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
