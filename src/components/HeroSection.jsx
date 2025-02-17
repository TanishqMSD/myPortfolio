import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import {FaLocationDot} from "react-icons/fa6";
import resume from "/resume.pdf";

const HeroSection = () => {
  // Parallax Background Effect
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-between text-white">
      {/* Left Side: Text Content */}
      <div className="flex flex-col justify-center items-start ml-4 w-1/2 p-8 space-y-6 py-4 mt-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl font-bold tracking-wide"
        >
          Hey! I'm <br/><span className="text-[#00c2ff] py-6"> Tanishq Kulkarni </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl"
        >
          I am a passionate Web Developer, creating modern, interactive web applications. Explore my projects and experience cutting-edge web technology! 

          
        </motion.p>
        <div className="flex space-x-4 items-center">
          <FaLocationDot className="text-3xl space-y-4 text-white" />
          <span>Mumbai, India</span>
        </div>
        {/* Download Resume Button */}
        <motion.a
          whileHover={{ scale: 1.1, backgroundColor: "#00c2ff", color: "#131314" }}
          whileTap={{ scale: 0.95 }}
          href={resume}
          download="TanishqKulkarni_Resume.pdf"
          className="mt-6 px-8 py-3 text-lg font-semibold rounded-full bg-transparent border-2 border-[#00c2ff] text-[#00c2ff] hover:bg-[#00c2ff] hover:text-[#131314] transition-all"
        >
          Download Resume
        </motion.a>
      </div>

      {/* Right Side: 3D Developer Model (No Clipping, Full Height) */}
      <div className="relative w-1/2 min-h-screen flex items-center justify-center overflow-visible">
        {/* 3D Model Canvas (Fixes Clipping) */}
        <Canvas
          className="absolute inset-0 w-full"
          style={{
            height: "100vh", // Forces full viewport height
            width: "100%",
            aspectRatio: "16/9", // Keeps correct proportions
            overflow: "visible",
          }}
        >
          <ambientLight intensity={2} />
          <directionalLight position={[3, 4, 3]} intensity={2} />
          <OrbitControls enableZoom={false} scale={0}/>
          <DeveloperModel  />
        </Canvas>
      </div>
    </section>
  );
};

const DeveloperModel = () => {
  const { scene } = useGLTF("/lost_programmer.glb");

  useFrame(({ clock }) => {
    scene.rotation.y += 0.005; // Constant rotation speed
  });

  return <primitive object={scene} scale={1.5} rotation={[Math.PI, 0, 0]} />;
};


export default HeroSection;
