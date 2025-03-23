import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaGithub, FaEnvelope, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import CodeSnippetCTA from "./CodeSnippetCTA";

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center py-8 mt-8">
      <Helmet>
        <title>Contact | Tanishq Kulkarni - Get in Touch</title>
        <meta name="description" content="Connect with Tanishq Kulkarni, a Web Developer from Mumbai. Reach out for collaborations, opportunities, or just to say hello." />
        <meta name="keywords" content="contact Tanishq Kulkarni, hire web developer Mumbai, web development collaboration" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Tanishq Kulkarni",
            "url": "https://tanishqkulkarni.com/contact",
            "sameAs": [
              "https://github.com/TanishqMSD",
              "https://www.linkedin.com/in/tanishq-kulkarni-0148682b6/",
              "https://twitter.com/tanishq7781",
              "https://instagram.com/tanishq7.exe"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "tanishqkulkarni18@gmail.com",
              "contactType": "professional"
            }
          })}
        </script>
      </Helmet>
      {/* Animated Title */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Let's Connect <span className="bg-transparent text-white">🚀</span>
      </motion.h2>

      {/* Container for CodeSnippetCTA and Contact Form */}
      <motion.div
        className="w-full max-w-7xl flex flex-col md:flex-row justify-center items-stretch gap-12 px-4 mb-12 mt-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* CodeSnippetCTA */}
        <div className="w-full md:w-1/2 min-h-[600px] flex items-center justify-center p-6">
          <CodeSnippetCTA />
        </div>

        {/* Contact Form */}
        <motion.form
          className="w-full md:w-1/2 flex flex-col gap-4 p-6 bg-[#1c1c1c] rounded-xl shadow-lg border border-cyan-500/20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-left w-full">Name</label>
            <input
              type="text"
              className="bg-[#131314] text-white p-3 rounded-lg border border-cyan-500/30 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none shadow-lg hover:border-cyan-500/50"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-left w-full">Email</label>
            <input
              type="email"
              className="bg-[#131314] text-white p-3 rounded-lg border border-cyan-500/30 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none shadow-lg hover:border-cyan-500/50"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-left w-full">Message</label>
            <textarea
              className="bg-[#131314] text-white p-3 rounded-lg border border-cyan-500/30 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none shadow-lg hover:border-cyan-500/50 min-h-[120px] resize-none"
              placeholder="Your message here..."
            />
          </div>
          <motion.button
            type="submit"
            className="mt-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="grid grid-cols-3 gap-6 md:grid-cols-5 mt-8"
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
