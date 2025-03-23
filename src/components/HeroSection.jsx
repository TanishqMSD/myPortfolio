import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {FaLocationDot} from "react-icons/fa6";
import resume from "/resume.pdf";
import tanishqImage from "../assets/tanisParel.jpg";

const HeroSection = () => {
  // Parallax Background Effect
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse position for interactive image effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between text-white">
      {/* Left Side: Text Content */}
      <div className="flex flex-col lg:ml-12 justify-center items-center md:items-start w-full md:w-1/2 p-4 md:p-8 space-y-4 md:space-y-6 py-4 mt-8 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wide"
        >
          Hey! I'm <br/><span className="text-[#00c2ff] py-4 md:py-6"> Tanishq Kulkarni </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl"
        >
          I am a passionate Web Developer, creating modern, interactive web applications. Explore my projects and experience cutting-edge web technology!
        </motion.p>
        <div className="flex space-x-4 items-center justify-center md:justify-start w-full">
          <FaLocationDot className="text-2xl md:text-3xl text-white" />
          <span>Mumbai, India</span>
        </div>
        {/* Download Resume Button */}
        <motion.a
          whileHover={{ scale: 1.1, backgroundColor: "#00c2ff", color: "#131314" }}
          whileTap={{ scale: 0.95 }}
          href={resume}
          download="TanishqKulkarni_Resume.pdf"
          className="mt-4 md:mt-6 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold rounded-full bg-transparent border-2 border-[#00c2ff] text-[#00c2ff] hover:bg-[#00c2ff] hover:text-[#131314] transition-all"
        >
          Download Resume
        </motion.a>
      </div>

      {/* Right Side: Interactive Image */}
      <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex items-center justify-center mt-8 md:mt-0">
        <motion.div 
          className="relative"
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
            rotateY: mousePosition.x * 10,
            rotateX: -mousePosition.y * 10,
          }}
          transition={{ type: "spring", stiffness: 75, damping: 15 }}
        >
          {/* Main container with proper aspect ratio */}
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] overflow-hidden">
            {/* Blue background gradient */}
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg blur-lg opacity-75"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { repeat: Infinity, duration: 10, ease: "linear" },
                scale: { repeat: Infinity, duration: 3, ease: "easeInOut" }
              }}
            />
            
            {/* Image container */}
            <motion.div 
              className="relative rounded-lg p-2 z-10"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-full h-full overflow-hidden rounded-lg">
                <img 
                  src={tanishqImage} 
                  alt="Tanishq Kulkarni" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Interactive floating elements */}
          <motion.div 
            className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full opacity-80"
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute -bottom-4 -left-4 w-8 h-8 md:w-12 md:h-12 bg-cyan-400 rounded-full opacity-80"
            animate={{ 
              y: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
