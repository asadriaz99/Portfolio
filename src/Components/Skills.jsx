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
      { name: "Tailwind CSS", proficiency: 75 },
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
  const randomSize = () => 60 + Math.random() * 60;
  const randomOffset = (range) => Math.random() * range * 2 - range;

  return (
    <motion.section
      className="min-h-screen bg-transparent text-black py-20 px-4 sm:px-8"
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Section Intro */}
        <header className="mb-16">
          <motion.div
            className="flex items-center mb-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm text-white font-medium tracking-wider">
              SKILLS & TOOLS
            </span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent animate-pulse text-center md:text-left leading-tight">
            Skills & Expertise
          </h1>
        </header>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-white bg-opacity-100 p-6 rounded-2xl shadow-md hover:shadow-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-6">
                  <Icon className="w-6 h-6 mr-2 text-black" />
                  <h2 className="text-2xl font-semibold">{category.name}</h2>
                </div>
                <ul className="space-y-4">
                  {Array.isArray(category.skills) ? (
                    category.skills.map((skill, i) =>
                      typeof skill === "string" ? (
                        <li key={i} className="flex items-center">
                          <ChevronRight className="w-4 h-4 mr-2 text-black" />
                          <span>{skill}</span>
                        </li>
                      ) : (
                        <li key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span>{skill.name}</span>
                            <span>{skill.proficiency}%</span>
                          </div>
                          <div className="w-full bg-black rounded-full h-2.5">
                            <motion.div
                              className="bg-blue-600 h-2.5 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 1 }}
                            />
                          </div>
                        </li>
                      )
                    )
                  ) : (
                    <li>No skills listed</li>
                  )}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Top Tools Section */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent animate-pulse text-center md:text-left">
            Top Tools
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {tools.map((tool, index) => {
              const size = randomSize();
              return (
                <motion.div
                  key={index}
                  className="rounded-full bg-blue-800 bg-opacity-90 p-2 shadow-lg"
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
                    scale: 1.2,
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
    </motion.section>
  );
}

export default SkillsPage;
