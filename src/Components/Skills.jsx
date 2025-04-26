import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Paintbrush, Users, ChevronRight } from "lucide-react";
import Figma from "../assets/Figma.png";
import Canva from "../assets/canva.png";
import SQL from "../assets/SQ.png";
import Illustrator from "../assets/ai.png";
import NodeJs from "../assets/Node.png";
import MongoDB from "../assets/mongo.png";
import HTML from "../assets/HTML.png";
import ReactM from "../assets/React.png";
import NextJ from "../assets/Nextjs.png";
import TailwindCSS from "../assets/Tailwind.png";
import Java from "../assets/java.png";

const skillCategories = [
  {
    name: "Technical Skills",
    icon: Code,
    skills: [
      { name: "HTML/CSS/JS", proficiency: 90 },
      { name: "SQL/MongoDB", proficiency: 65 },
      { name: "React", proficiency: 75 },
      { name: "TAILWIND CSS", proficiency: 75 },
    ],
  },
  {
    name: "Design Skills",
    icon: Paintbrush,
    skills: [
      { name: "UI/UX Design", proficiency: 85 },
      { name: "Branding", proficiency: 80 },
      { name: "Logo Design", proficiency: 75 },
      { name: "Posters", proficiency: 70 },
    ],
  },
  {
    name: "Soft Skills",
    icon: Users,
    skills: [
      "Creative Thinking",
      "Team Collaboration",
      "Time Management",
      "Problem Solving",
    ],
  },
];

const tools = [
  { name: "Figma", src: Figma },
  { name: "React", src: ReactM },
  { name: "Next.js", src: NextJ },
  { name: "Java", src: Java },
  { name: "SQL", src: SQL },
  { name: "Illustrator", src: Illustrator },
  { name: "Canva", src: Canva },
  { name: "HTML", src: HTML },
  { name: "TailwindCSS", src: TailwindCSS },
  { name: "MongoDB", src: MongoDB },
  { name: "NodeJs", src: NodeJs },
];

function SkillsPage() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const randomSize = () => 40 + Math.random() * 60;
  const randomOffset = (range) => Math.random() * range * 2 - range;

  return (
    <motion.div
      className="min-h-screen text-white overflow-hidden relative"
      id="skills"
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header Section */}
        <header className="mb-16">
          <motion.div
            className="inline-flex items-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium">SKILLS & TOOLS</span>
          </motion.div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-pulse text-left">
            Skills & Expertise
          </h1>
        </header>

        {/* Skills Display Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-purple-900 bg-opacity-100 p-6 rounded-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                }}
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 mr-2 text-purple-400" />
                  <h2 className="text-2xl font-semibold">{category.name}</h2>
                </div>
                <ul className="space-y-4">
                  {Array.isArray(category.skills) ? (
                    category.skills.map((skill, i) =>
                      typeof skill === "string" ? (
                        <li key={i} className="flex items-center">
                          <ChevronRight className="w-4 h-4 mr-2 text-purple-400" />
                          <span>{skill}</span>
                        </li>
                      ) : (
                        <li key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span>{skill.name}</span>
                            <span>{skill.proficiency}%</span>
                          </div>
                          <div className="w-full bg-purple-200 rounded-full h-2.5">
                            <motion.div
                              className="bg-purple-600 h-2.5 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </div>
                        </li>
                      )
                    )
                  ) : (
                    <li>No skills available</li>
                  )}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Tools Section */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-pulse text-left">
            Top Tools
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => {
              // Increased base size range — now 60 to 100 instead of 40 to 100
              const size = 60 + Math.random() * 60;
              return (
                <motion.div
                  key={index}
                  className="rounded-full p-2 bg-purple-800 bg-opacity-90 shadow-lg"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                  }}
                  initial={{
                    rotate: randomOffset(15),
                    y: randomOffset(10),
                    x: randomOffset(10),
                  }}
                  whileHover={{
                    scale: 1.25, // increased zoom on hover
                    rotate: 0,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="w-full h-full object-contain rounded-full"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillsPage;
