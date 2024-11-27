import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IMG1 from '../assets/anirec.png'
import IMG2 from '../assets/crs.png'
import IMG3 from '../assets/SQL.png'
import IMG4 from '../assets/logo.png'
import IMG5 from '../assets/infog.png'
import IMG6 from '../assets/landingpage.png'

const projects = [
  {
    id: 1,
    title: "Recommendation Website",
    description: "A Nest and Node JS Mini Project",
    category: "WEBSITES",
    image: IMG1
  },
  {
    id: 2,
    title: "Car Rental System",
    description: "Java and SQL Based",
    category: "JAVA",
    image: IMG2,
  },
  {
    id: 3,
    title: "ERD AND DATBASES",
    description: "Database ERD",
    category: "SQL",
    image: IMG3,
  },
  {
    id: 4,
    title: "Logo Designs",
    description: "Modern and Elegant Logo's for companies",
    category: "GRAPHIC DESIGN",
    image: IMG4,
  },
  {
    id: 5,
    title: "Infographics",
    description: "Modern Infographics and Posters",
    category: "GRAPHIC DESIGN",
    image: IMG5,
  },
  {
    id: 6,
    title: "Agency Landing Page",
    description: "Agency Landing Pages Using Figma",
    category: "UI/UX",
    image: IMG6,
  },
];

const categories = ["All", "UI/UX", "WEBSITES", "GRAPHIC DESIGN", "JAVA"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <motion.div
      className="min-h-screen bg-gradient-radial from-purple-900 via-black to-black text-white overflow-hidden relative"
      initial="hidden"
      animate="visible"
      id="projects"
    >
      {/* Accent Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-500 rounded-full opacity-20"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header Section */}
        <motion.header className="text-center mb-16">
          <motion.h1
            className="text-5xl font-bold mb-4 text-purple-400"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            My Projects
          </motion.h1>
          <motion.div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent"></motion.div>
        </motion.header>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category ? "bg-purple-600" : "bg-purple-800"
              } text-white font-semibold`}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 12px rgba(147, 51, 234, 0.5)",
              }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Display Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                  }}
                  className="relative overflow-hidden rounded-lg bg-gray-900"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-2xl font-bold mb-2 text-purple-400">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
