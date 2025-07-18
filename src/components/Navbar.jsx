import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const FloatingShape = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={window.innerWidth < 768 ? 2 : 2.5} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1, 0]} />
      <MeshWobbleMaterial color={"#00c2ff"} speed={2} factor={0.6} />
    </mesh>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.replace("#", ""), {
        smooth: true,
        duration: 500,
      });
    }
  }, [location]);

  const openMenu = () => {
    setIsOpen(true);
    controls.start({ x: 0 });
  };

  const closeMenu = () => {
    setIsOpen(false);
    controls.start({ x: "-100%" });
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-[80%] md:w-[60%] bg-opacity-20 backdrop-blur-md border border-gray-700 rounded-full px-6 py-2 z-50"
        style={{ background: "rgba(255, 255, 255, 0.05)" }}
      >
        {/* Logo & 3D Shape */}
        <div className="flex items-center space-x-3">
          <motion.div whileHover={{ scale: 1.1, rotateZ: 10 }} transition={{ duration: 0.3 }} className="relative w-12 h-12">
            <Canvas className="absolute inset-0">
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 2]} />
              <FloatingShape />
            </Canvas>
          </motion.div>
          <span className="text-white font-bold text-xl tracking-wide">TANISHQ</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-300 font-semibold">
          {["Home", "Skills", "Projects", "Education", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#00c2ff", textShadow: "0px 0px 10px rgba(0,194,255,0.8)" }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer transition-all"
            >
              <ScrollLink to={item.toLowerCase()} smooth={true} duration={500}>
                {item}
              </ScrollLink>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.div className="md:hidden block text-gray-300 cursor-pointer" onClick={openMenu} whileHover={{ scale: 1.1 }}>
          ☰
        </motion.div>
      </motion.nav>

      {/* Mobile Sidebar Menu */}
      <motion.div
        animate={controls}
        initial={{ x: "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-full bg-[#131314] text-white w-[75%] max-w-[300px] p-6 flex flex-col space-y-6 z-50 shadow-lg md:hidden"
      >
        <h2 className="text-2xl font-bold border-b pb-2">Menu</h2>
        {["Home", "Skills", "Projects", "Education", "Contact"].map((item, index) => (
          <motion.a
            key={index}
            onClick={() => {
              closeMenu();
              scroller.scrollTo(item.toLowerCase(), { smooth: true, duration: 500 });
            }}
            className="text-lg font-medium hover:text-[#00c2ff] transition-all cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            {item}
          </motion.a>
        ))}

        {/* Close Button */}
        <motion.button className="mt-auto text-gray-400 hover:text-white transition-all" onClick={closeMenu} whileHover={{ scale: 1.1 }}>
          ✖ Close
        </motion.button>
      </motion.div>

      {/* Overlay for Mobile Menu */}
      {isOpen && <div onClick={closeMenu} className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>}
    </>
  );
};

export default Navbar;
