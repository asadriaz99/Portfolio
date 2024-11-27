import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Paintbrush, Users, ChevronRight } from 'lucide-react';

const skillCategories = [
  {
    name: 'Technical Skills',
    icon: Code,
    skills: [
      { name: 'HTML/CSS/JS', proficiency: 90 },
      { name: 'SQL', proficiency: 65 },
      { name: 'React', proficiency: 75 },
      { name: 'TAILWIND CSS', proficiency: 75 },
    ],
  },
  {
    name: 'Design Skills',
    icon: Paintbrush,
    skills: [
      { name: 'UI/UX Design', proficiency: 85 },
      { name: 'Branding', proficiency: 80 },
      { name: 'Logo Design', proficiency: 75 },
      { name: 'Email Design', proficiency: 70 },
    ],
  },
  {
    name: 'Soft Skills',
    icon: Users,
    skills: ['Creative Thinking', 'Team Collaboration', 'Time Management', 'Problem Solving'],
  },
];

function SkillsPage() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <motion.div
      className="min-h-screen bg-gradient-radial from-purple-900 via-black to-black text-white overflow-hidden relative" id='skills'
      initial="hidden"
      animate="visible"
    >
      {/* Accent Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none skills-accent">
  {[...Array(20)].map((_, i) => (
    <motion.div
      key={`skills-${i}`}
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
        repeatType: 'reverse',
      }}
    />
  ))}
</div>


      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-purple-400 animate-pulse">
            Skills & Expertise
          </h1>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </header>

        {/* Skills Display Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              className="bg-purple-900 bg-opacity-100 p-6 rounded-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)' }}
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 mr-2 text-purple-400" />
                <h2 className="text-2xl font-semibold">{category.name}</h2>
              </div>
              <ul className="space-y-4">
                {Array.isArray(category.skills) ? (
                  category.skills.map((skill) =>
                    typeof skill === 'string' ? (
                      <li key={skill} className="flex items-center">
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
                            transition={{ duration: 1, ease: 'easeOut' }}
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
          ))}
        </div>

        {/* Featured Skill Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-black mb-6 text-center">Top Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['React', 'UI/UX Design', 'SQL', 'Problem Solving'].map((skill) => (
              <motion.div
                key={skill}
                className="bg-purple-800 bg-opacity-100 p-4 rounded-lg text-center"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(147, 51, 234, 0.7)' }}
                onHoverStart={() => setHoveredSkill(skill)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <h3 className="text-xl font-semibold mb-2">{skill}</h3>
                <p className="text-sm">
                  {hoveredSkill === skill ? 'Expert level proficiency' : 'Hover for more info'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        
      </div>
    </motion.div>
  );
}

export default SkillsPage;
