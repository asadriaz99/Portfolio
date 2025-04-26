import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Importing the Link component from react-scroll

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-lg font-bold">
          <a
            href="/"
            className={`transition-colors ${
              isScrolled ? "text-black" : "text-white-500"
            } hover:text-gray-200`}
          >
            Asad.
          </a>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-white ${isScrolled ? "text-black" : "text-white"}`}
          >
            <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex ml-auto space-x-6 lg:flex ${
            isMenuOpen ? "flex-col mt-4" : "hidden"
          } lg:flex-row lg:space-x-6`}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={`transition-colors font-semibold ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-gray-200`}
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className={`transition-colors font-semibold ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-gray-200`}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={`transition-colors font-semibold ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-gray-200`}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`transition-colors font-semibold ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-gray-200`}
          >
            Contact
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="hidden lg:flex space-x-4">
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
              } hover:text-gray-200 transition-colors`}
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
