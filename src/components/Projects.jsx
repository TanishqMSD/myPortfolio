import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiExpress, SiMongodb, SiTailwindcss, SiPhp, SiMysql, SiOpenai, SiGooglegemini } from "react-icons/si";
import LangflowLogo from "../assets/langflow.png";
import Invoisify from "../assets/invoisify.jpg";
import Influence from "../assets/influenceiq.png";

// Tech Stack Component
// const TechStack = () => {
//   return (
//     <div className="relative w-full py-12 flex flex-col items-center space-y-6">
//       <h2 className="text-white text-3xl font-bold py-8">Tech Stack & Languages</h2>
//       <motion.div
//         className="flex items-center space-x-8 md:space-x-16 overflow-hidden"
//         animate={{ x: ["100%", "-100%"] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//       >
//         <TechIcon icon={<SiHtml5 />} color="text-orange-500" />
//         <TechIcon icon={<SiCss3 />} color="text-blue-500" />
//         <TechIcon icon={<SiJavascript />} color="text-yellow-400" />
//         <TechIcon icon={<FaReact />} color="text-blue-500" />
//         <TechIcon icon={<FaNodeJs />} color="text-green-500" />
//         <TechIcon icon={<SiExpress />} color="text-gray-400" />
//         <TechIcon icon={<SiMongodb />} color="text-green-600" />
//         <TechIcon icon={<SiPhp />} color="text-purple-500" />
//         <TechIcon icon={<SiMysql />} color="text-blue-400" />
//         <TechIcon icon={<SiTailwindcss />} color="text-teal-400" />
//         <TechIcon imgSrc={LangflowLogo} />
//         <TechIcon icon={<SiGooglegemini />} color="text-green-400" />
//         <TechIcon icon={<SiOpenai />} color="text-blue-400" />
//         <TechIcon icon={<SiOpenai />} color="text-blue-400" />
//       </motion.div>
//     </div>
//   );
// };

const TechStack = () => {
  return (
    <div className="relative w-full py-12 flex flex-col items-center space-y-6 overflow-hidden">
      <h2 className="text-white text-3xl font-bold py-8">Tech Stack & Languages</h2>
      <motion.div
        className="flex items-center space-x-8 md:space-x-16"
        animate={{ x: ["50%", "-80%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        {/* Duplicate the icons to create a seamless scrolling effect */}
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <TechIcon icon={<SiHtml5 />} color="text-orange-500" />
            <TechIcon icon={<SiCss3 />} color="text-blue-500" />
            <TechIcon icon={<SiJavascript />} color="text-yellow-400" />
            <TechIcon icon={<FaReact />} color="text-blue-500" />
            <TechIcon icon={<FaNodeJs />} color="text-green-500" />
            <TechIcon icon={<SiExpress />} color="text-gray-400" />
            <TechIcon icon={<SiMongodb />} color="text-green-600" />
            <TechIcon icon={<SiPhp />} color="text-purple-500" />
            <TechIcon icon={<SiMysql />} color="text-blue-400" />
            <TechIcon icon={<SiTailwindcss />} color="text-teal-400" />
            <TechIcon imgSrc={LangflowLogo} />
            <TechIcon icon={<SiGooglegemini />} color="text-green-400" />
            <TechIcon icon={<SiOpenai />} color="text-blue-400" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};


const TechIcon = ({ icon, imgSrc, color }) => {
  return imgSrc ? (
    <img src={imgSrc} alt="Tech Logo" className="w-12 md:w-14 h-12 md:h-14" />
  ) : (
    <div className={`text-5xl md:text-6xl ${color}`}>{icon}</div>
  );
};

const ProjectCard = ({ title, description, liveLink, githubLink, imgSrc, tags }) => {
  return (
    <div>
    <motion.div whileHover={{ scale: 1.05 }} className="relative h-auto flex flex-col">
      <div className="bg-[#1c1c1c] shadow-lg rounded-xl overflow-hidden transition-transform duration-300 p-4 sm:p-6">
        {/* Project Image */}
        <img src={imgSrc} alt={title} className="w-full h-40 sm:h-48 object-cover rounded-lg" />

        {/* Content */}
        <div className="mt-3 sm:mt-4">
          <h3 className="text-[#00c2ff] text-xl sm:text-2xl font-bold">{title}</h3>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">{description}</p>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span key={index} className="bg-[#00c2ff] text-black px-3 py-1 rounded-md text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex justify-between mt-6">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-[#00c2ff] hover:text-white transition">
                Live Demo
              </a>
            )}
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-[#00c2ff] hover:text-white transition">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  );
};

// Project Grid
const Projects = () => {
  return (
    <div className="flex flex-col items-center py-16 px-6">
      <Helmet>
        <title>Projects | Tanishq Kulkarni - Web Developer Portfolio</title>
        <meta name="description" content="Explore Tanishq Kulkarni's web development projects including Invoisify, InfluenceIQ, and more. Full-stack development with React, Node.js, and modern technologies." />
        <meta name="keywords" content="Tanishq Kulkarni projects, web development portfolio, React projects, Node.js applications, Mumbai developer" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "SoftwareApplication",
                "name": "Invoisify",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web"
              },
              {
                "@type": "SoftwareApplication",
                "name": "InfluenceIQ",
                "applicationCategory": "AnalysisApplication",
                "operatingSystem": "Web"
              }
            ]
          })}
        </script>
      </Helmet>
      <TechStack />
      <span className="text-white text-3xl font-bold py-8">Projects</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mt-8 sm:mt-12 max-w-6xl w-full px-4 sm:px-6">
        <ProjectCard 
          title="Invoisify" 
          description="An Invoice Generator App with robust features."
          liveLink="https://invoisify-tech.vercel.app"  
          githubLink="https://github.com/TanishqMSD/invoisify" 
          imgSrc={Invoisify}
          tags={["OAuth Google Login", "HTML2PDF", "Template Storage", "In Progress"]}
        />
        <ProjectCard 
          title="InfluenceIQ" 
          description="An AI-based social media analyzer to get insights." 
          liveLink="https://influence-iq.vercel.app" 
          githubLink="https://github.com/TanishqMSD/socialmedia-analyzer" 
          imgSrc={Influence}
          tags={["AI-Powered", "Data Analysis", "Social Media Insights"]}
        />
        <ProjectCard 
          title="Stay Tuned" 
          description="Something big coming soon! Some big project." 
          githubLink="https://github.com/" 
          imgSrc="https://your-image-url.com/coming-soon.png" 
          tags={["Exciting Features", "Coming Soon"," Application"]}
        />
      </div>
    </div>
  );
};

export default Projects;
