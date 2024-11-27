import { useState } from "react";
import { motion } from "framer-motion";
import "@fontsource/orbitron"; // Import Orbitron font
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const faqs = [
  {
    question: "How soon can I expect a response?",
    answer: "I usually reply within 24 hours.",
  },
  {
    question: "What type of projects do you work on?",
    answer: "I specialize in web development and graphic design.",
  },
  {
    question: "Do you offer consultations?",
    answer:
      "Yes, I offer free 30-minute consultations to discuss your project needs.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formState;

    // Form validation
    if (!name || !email || !subject || !message) {
      alert("All fields are required!");
      return;
    }

    try {
      setStatus({ loading: true, success: null, error: null });

      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setStatus({
          loading: false,
          success: "Message sent successfully!",
          error: null,
        });
        setFormState({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        const errorData = await response.json();
        setStatus({
          loading: false,
          success: null,
          error: errorData.error || "Failed to send message.",
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: null,
        error: "An error occurred. Please try again.",
      });
      console.error(error);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-radial from-purple-900 via-black to-black text-black overflow-hidden relative"
      id="contact"
    >
      {/* Accent Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none contact-accent z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`contact-${i}`}
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

      {/* Page Content */}
      <div className="container mx-auto px-4 py-16 relative z-20">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="orbitron text-5xl font-bold mb-4 text-purple-400 animate-pulse">
            Get in Touch
          </h1>
          <p className="text-xl mb-4">
            Let's create something amazing together
          </p>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2 text-black">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-purple-900 text-white bg-opacity-100 border border-purple-500 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-purple-900 bg-opacity-100 text-white border border-purple-500 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-purple-900 bg-opacity-100 text-white border border-purple-500 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                  placeholder="Subject"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-purple-900 bg-opacity-100 text-white border border-purple-500 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 text-white rounded-md font-semibold"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(147, 51, 234, 0.7)",
                }}
                whileTap={{ scale: 0.95 }}
                disabled={status.loading}
              >
                {status.loading ? "Sending..." : "Send Message"}
              </motion.button>
              {status.success && (
                <p className="text-green-500 mt-2">{status.success}</p>
              )}
              {status.error && (
                <p className="text-red-500 mt-2">{status.error}</p>
              )}
            </form>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-purple-900 bg-opacity-100 p-6 rounded-lg">
              <h2 className="orbitron text-2xl text-white font-semibold mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-white" />
                  <a
                    href="mailto:lishayshahid.bahrian@gmail.com"
                    className="text-white transition-colors"
                  >
                    lishayshahid.bahrian@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-white" />
                  <span className="text-white">+92 322 2269380</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-900 bg-opacity-100 p-6 rounded-lg">
              <h2 className="orbitron text-2xl text-white font-semibold mb-4">
                Social Media
              </h2>
              <div className="flex space-x-4">
                {[
                  {
                    Icon: Linkedin,
                    link: "https://www.linkedin.com/in/alishba-shahid-137399313/",
                  },
                  { Icon: Github, link: "https://github.com/AlishbaZ21" },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link} // Added the dynamic link here
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security best practice
                    className="text-white hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <item.Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-purple-900 bg-opacity-100 text-white p-6 rounded-lg">
              <h2 className="orbitron text-2xl  font-semibold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-purple-700 pb-2">
                    <button
                      className="flex justify-between items-center w-full text-left"
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                    >
                      <span className="font-medium">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    {openFaq === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-purple-300"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
