import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import CodeSnippetCTA from "./CodeSnippetCTA";

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center py-8 mt-8">
      {/* Animated Title */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Let's Connect <span className="bg-transparent text-white">🚀</span>
      </motion.h2>

      {/* CodeSnippetCTA Positioned Between Heading & Social Links */}
      <motion.div
        className="w-full max-w-4xl flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1.5, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <CodeSnippetCTA />
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="grid grid-cols-3 gap-6 md:grid-cols-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {[
          { icon: <FaGithub />, name: "GitHub", url: "https://github.com/TanishqMSD" },
          { icon: <FaEnvelope />, name: "Email", url: "mailto:tanishqkulkarni18@gmail.com" },
          { icon: <FaTwitter />, name: "Twitter", url: "https://twitter.com/tanishq7781" },
          { icon: <FaInstagram />, name: "Instagram", url: "https://instagram.com/tanishq7.exe" },
          { icon: <FaLinkedin />, name: "LinkedIn", url: "https://www.linkedin.com/in/tanishq-kulkarni-0148682b6/" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            className="flex flex-col items-center gap-2 text-lg p-4 rounded-xl text-gray-300 hover:text-white bg-[#1c1c1c] hover:bg-cyan-600 transition duration-300 shadow-md"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="text-3xl"
              whileHover={{ scale: 1.3, color: "#00FFFF" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
            </motion.div>
            <span className="text-sm font-medium">{item.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
