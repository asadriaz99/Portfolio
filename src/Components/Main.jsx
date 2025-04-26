import React, { useState } from "react";
import { motion } from "framer-motion";
import Img from "../assets/ME.jpg";

export default function Main() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.5 },
    },
  };

  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    const x = ((offsetY - offsetHeight / 2) / offsetHeight) * 20;
    const y = ((offsetX - offsetWidth / 2) / offsetWidth) * 20;

    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Animated Text Section */}
        <motion.div
          className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-pulse space-y-8 text-left"
          variants={textVariants}
        >
          <motion.h1
            className="text-7xl font-bold leading-tight"
            variants={textVariants}
          >
            <h1 className="text-9xl">Hi.</h1>I am{" "}
            <span className="italic font-serif">Asad Riaz</span>
            <div className="w-3 h-3 bg-pink-500 rounded-full mr-2 inline-flex"></div>
            <span className="text-sm text-white font-medium">
              A BIT ABOUT ME
            </span>
            <p className="font-light text-white text-base px-8">
              I am a Innovative Graphic Designer and UI/UX specialist with a
              passion for crafting visually engaging and user-friendly digital
              experiences with 3 years of Experience in Design. With a keen eye
              for detail and design, I turn ideas into impactful visuals.
            </p>
          </motion.h1>
        </motion.div>

        {/* Updated Animated Image Section */}
        <motion.div variants={imageVariants} className="md:pl-48">
          <motion.img
            src={Img}
            alt="Profile"
            className="rounded-[180px] pt-8 w-82 h-230 object-cover"
            style={{
              boxShadow: "5px 5px 5px 5px rgba(168, 85, 247, 0.7)",
              rotateX: rotate.x,
              rotateY: rotate.y,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
