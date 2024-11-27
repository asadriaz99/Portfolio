import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import FooterPage from "./Footer";
import Img from "../assets/llisha1.jpg";

export default function Main() {
  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-radial from-purple-900 via-black to-black text-black overflow-hidden"
      id="about"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Accent Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-500 rounded-full opacity-10"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header Section */}
        <motion.header className="text-center mb-16" variants={itemVariants}>
          <motion.h1
            className="text-5xl font-bold mb-4 text-purple-400 animate-pulse"
            animate={pulseAnimation}
          >
            Alishba
            <span className="text-pink-400"> Here!</span>
          </motion.h1>
          <motion.div
            className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            variants={itemVariants}
          ></motion.div>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src={Img}
                alt=""
                width="400"
                height="400"
                className="rounded-full shadow-lg"
                animate={pulseAnimation}
              />
              <div className="absolute inset-0 rounded-full bg-purple-500 opacity-30 blur-xl"></div>
            </motion.div>
          </motion.div>

          {/* About Me Text */}
          <motion.div variants={itemVariants}>
            <motion.p className="text-lg mb-6" variants={itemVariants}>
              My name is Alishba Shahid, and I am a passionate computer science
              graduate from Bahria University, eager to bring my technical
              skills and innovative mindset to a dynamic tech-based company.
              Throughout my academic journey, I have developed a solid
              foundation in software development, data analysis, and
              problem-solving, complemented by hands-on experience in various
              projects and internships. I thrive in collaborative environments
              and am committed to leveraging technology to create impactful
              solutions. With a keen interest in emerging technologies and a
              drive for continuous learning, I am excited to contribute to
              cutting-edge projects that push the boundaries of what is
              possible in the tech industry.
            </motion.p>

            {/* Key Highlights Section */}
            <motion.div
              className="grid grid-cols-2 text-white font-semibold gap-4 mb-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {[
                "Critical Thinker",
                "Problem Solver",
                "Quick Learner",
                "Great Communicator",
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  className="bg-purple-600 bg-opacity-100 p-4 rounded-lg text-center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)",
                  }}
                  variants={itemVariants}
                >
                  {highlight}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
