import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onFinish }) => {
  const [text, setText] = useState("Hello, World!");

  useEffect(() => {
    setTimeout(() => setText("Welcome to Tanishq's Portfolio"), 2000);
    setTimeout(onFinish, 4000);
  }, [onFinish]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white text-2xl font-bold z-50">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default Preloader;
