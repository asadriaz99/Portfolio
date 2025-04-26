import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "@fontsource/orbitron";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="orbitron text-5xl font-bold text-purple-400 mb-6 animate-pulse">
          Thank You!
        </h1>
        <p className="text-xl mb-8">
          Your message has been received. I’ll get back to you within 24 hours!
        </p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            to="/"
            className="px-6 py-3 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition-all duration-300"
          >
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
