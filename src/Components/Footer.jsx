import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const FooterPage = () => {
  const socialLinks = [
    {
      Icon: FaGithub,
      href: "https://github.com/asadriaz99",
      label: "Github",
    },
    {
      Icon: FaLinkedin,
      href: "www.linkedin.com/in/asad-riaz-294401264",
      label: "LinkedIn",
    },
    {
      Icon: FaEnvelope,
      href: "mailto:asadriaz88218821@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div>
      <footer className="bg-white text-black py-10">
        <div className="container text-black mx-auto px-6">

          {/* Divider */}
          <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-black to-transparent mb-6"></div>

          {/* Call to Action */}
          <p className="text-lg mb-6 text-center">
            Ready to collaborate? Let's create something amazing together!
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map(({ Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                className="text-black hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center flex-wrap space-x-8 mb-6 text-sm text-center">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-blue-400 transition-colors cursor-pointer mb-2 sm:mb-0"
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-blue-400 transition-colors cursor-pointer mb-2 sm:mb-0"
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-blue-400 transition-colors cursor-pointer mb-2 sm:mb-0"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-purple-400 transition-colors cursor-pointer mb-2 sm:mb-0"
            >
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-black text-center">
            &copy; {new Date().getFullYear()} Asad Riaz 99. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterPage;
