import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Importing the Link component from react-scroll

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-purple-500 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-lg font-bold">
          <a
            href="/"
            className={`transition-colors ${
              isScrolled ? "text-white" : "text-pink-500"
            } hover:text-pink-300`}
          >
            Asad.
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex ml-auto space-x-6">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={`transition-colors font-semibold ${
              isScrolled ? "text-white" : "text-pink-500"
            } hover:text-pink-300`}
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className={`transition-colors font-semibold ${
              isScrolled ? "text-white" : "text-pink-500"
            } hover:text-pink-300`}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={`transition-colors font-semibold ${
              isScrolled ? "text-white" : "text-pink-500"
            } hover:text-pink-300`}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`transition-colors font-semibold ${
              isScrolled ? "text-white" : "text-pink-500"
            } hover:text-pink-300`}
          >
            Contact
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {[
            { href: "https://twitter.com", icon: "FaTwitter" },
            { href: "https://github.com", icon: "FaGithub" },
            { href: "https://linkedin.com", icon: "FaLinkedin" },
          ].map(({ href, icon }, index) => (
            <motion.a
              key={index}
              href={href}
              className={`${
                isScrolled ? "text-black" : "text-white"
              } hover:text-purple-500 transition-colors`}
              whileHover={{ scale: 1.2 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fab ${icon}`} />
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
