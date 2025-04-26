import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import IMG1 from "../Projects/P1.png";
import IMG2 from "../Projects/P2.png";
import IMG3 from "../Projects/P3.png";
import IMG4 from "../Projects/P4.png";
import IMG5 from "../Projects/P5.png";
import IMG6 from "../Projects/P6.png";

const projects = [
  { id: 1, title: "Signify App", image: IMG1 },
  { id: 2, title: "TailTreats Website", image: IMG2 },
  { id: 3, title: "MediPlus Website", image: IMG3 },
  { id: 4, title: "Travel Website", image: IMG4 },
  { id: 5, title: "Consolify Website", image: IMG5 },
  { id: 6, title: "Agency Landing Page", image: IMG6 },
];

export default function ProjectsSection() {
  return (
    <motion.div
      className="min-h-screen text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      id="projects"
    >
      <div className="container px-14 mx-auto py-12 sm:py-16">
        {/* Top Label */}
        <div className="flex items-center mb-6">
          <div className="w-3 h-3 bg-pink-500 rounded-full inline-flex mr-2"></div>
          <span className="text-sm sm:text-base font-medium">MY PROJECTS</span>
        </div>

        {/* Header */}
        <motion.header className="text-left mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Elevating Brands with <br className="hidden sm:block" /> Design Brilliance
          </h1>
        </motion.header>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl overflow-hidden shadow-lg relative border border-purple-600 hover:shadow-[0_0_40px_rgba(168,85,247,0.9)] transition-all duration-300 ease-in-out"
              >
                {/* Top Labels */}
                <div className="absolute top-3 left-3 text-xs sm:text-sm font-medium text-white">
                  {project.title}
                </div>
                <div className="absolute top-3 right-3 text-xs sm:text-sm font-medium text-white">
                  AR99
                </div>

                {/* Project Image */}
                <div className="w-full flex items-center justify-center overflow-hidden p-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full max-h-60 sm:max-h-72 md:max-h-80"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://www.behance.net/asadriaz17"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 text-sm sm:text-base"
          >
            Load More
          </a>
        </div>
      </div>
    </motion.div>
  );
}
