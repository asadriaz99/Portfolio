import { useState } from "react";
import { motion } from "framer-motion";
import "@fontsource/orbitron";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formState;

    if (!name || !email || !subject || !message) {
      alert("All fields are required!");
      return;
    }

    setStatus({ loading: false, success: "Message sent successfully!", error: null });
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen text-black overflow-hidden relative" id="contact">
      <div className="container mx-auto px-4 py-16 relative z-20">
        <header className="text-left mb-16">
        <div className="w-3 h-3 bg-pink-500 rounded-full inline-flex mr-2"></div>
        <span className="text-sm text-white font-medium">CONTACT ME</span>
          <h1 className="text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Quick Contact
          </h1>
          <p className="text-xl text-white mb-4">
            Let's create something amazing together
          </p>
          
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form 
              className="space-y-6" 
              onSubmit={handleSubmit} 
              name="contact" 
              method="POST" 
              action="/thankyou"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="space-y-2 text-black">
                <label htmlFor="name" className="block text-white text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-purple-900 text-white border border-purple-500 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-white text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-purple-900 text-white border border-purple-500 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-white text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-purple-900 text-white border border-purple-500 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                  placeholder="Subject"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-white text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-purple-900 text-white border border-purple-500 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
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

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-purple-900 p-6 rounded-lg">
              <h2 className="orbitron text-2xl text-white font-semibold mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-white" />
                  <a
                    href="mailto:asadriaz88218821@gmail.com"
                    className="text-white transition-colors"
                  >
                    asadriaz88218821@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-white" />
                  <span className="text-white">+92 327 2334177</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-900 p-6 rounded-lg">
              <h2 className="orbitron text-2xl text-white font-semibold mb-4">
                Social Media
              </h2>
              <div className="flex space-x-4">
                {[
                  { Icon: Linkedin, link: "www.linkedin.com/in/asad-riaz-294401264" },
                  { Icon: Github, link: "https://github.com/asadriaz99" },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <item.Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-purple-900 p-6 rounded-lg text-white">
              <h2 className="orbitron text-2xl font-semibold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-purple-700 pb-2">
                    <button
                      className="flex justify-between items-center w-full text-left"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
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
