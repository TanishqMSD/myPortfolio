import React, {useState} from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiExpress, SiMongodb, SiTailwindcss, SiPhp, SiMysql, SiOpenai, SiGooglegemini } from "react-icons/si";
import LangflowLogo from "../assets/langflow.png";
import Invoisify from "../assets/invoisify.jpg";
import Influence from "../assets/influenceiq.png";
import EduAI from "../assets/eduai.png";

import Level from "../assets/levelsupermind.png";
import Hackfusion from "../assets/hackfusion.jpg";
import Quasar from "../assets/quasar.jpg";

import CerLevel from "../assets/certificates/level.png";
import CerHackfusion from "../assets/certificates/hackfusion.png";
import CerQuasar from "../assets/certificates/quasar.jpg";

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
        animate={{ x: ["-80%", "50%"] }}
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

const ProjectCard = ({ title, description, liveLink, githubLink, imgSrc, tags, videoLink, techStack, completionDate, featured, role }) => {
  return (
    <div>
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className="relative h-full flex flex-col"
      >
        <div className="bg-[#1c1c1c] shadow-lg rounded-xl overflow-hidden transition-all duration-300 p-4 sm:p-6 border border-gray-800 hover:border-[#00c2ff] h-full flex flex-col">
          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 right-4 bg-[#00c2ff] text-black px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg">
              Featured
            </div>
          )}
          
          {/* Project Image with Overlay */}
          <div className="relative overflow-hidden rounded-lg group">
            <img 
              src={imgSrc} 
              alt={title} 
              className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {completionDate && (
                  <span className="text-white/80 text-sm">{completionDate}</span>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-4 sm:mt-5 flex-grow flex flex-col">
            <h3 className="text-[#00c2ff] text-xl sm:text-2xl font-bold">{title}</h3>
            
            {/* Role */}
            {role && (
              <div className="text-gray-300 text-sm mt-1 italic">{role}</div>
            )}
            
            <p className="text-gray-400 mt-3 text-sm sm:text-base flex-grow">{description}</p>

            {/* Tech Stack */}
            {techStack && techStack.length > 0 && (
              <div className="mt-4">
                <h4 className="text-gray-300 text-sm font-semibold mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <span key={index} className="bg-[#00c2ff] text-black px-3 py-1 rounded-md text-sm font-semibold">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex justify-between mt-6 pt-4 border-t border-gray-800">
              {liveLink && (
                <a 
                  href={liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#00c2ff] hover:text-white transition flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
              {videoLink ? (
                <a 
                  href={videoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#00c2ff] hover:text-white transition flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  View Hackathon
                </a>
              ) : (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#00c2ff] hover:text-white transition flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Project Grid
const Projects = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="flex flex-col items-center py-16 px-6">
      <Helmet>
        <title>Projects | Tanishq Kulkarni - MERN Stack Developer in Mumbai</title>
        <meta name="description" content="Explore Tanishq Kulkarni's web development projects including Invoisify, InfluenceIQ, and more. Full-stack MERN development by Mumbai-based developer Tanishq Codes." />
        <meta name="keywords" content="Tanishq Kulkarni projects, Tanishq Codes, MERN stack developer Mumbai, Tanishq web developer, React projects, Node.js applications, Tanishq VIT, Mumbai developer portfolio" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "SoftwareApplication",
                "name": "Invoisify",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "author": {
                  "@type": "Person",
                  "name": "Tanishq Kulkarni",
                  "jobTitle": "MERN Stack Developer",
                  "url": "https://tanishqkulkarni.com"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "description": "An Invoice Generator App with robust features by Tanishq Codes"
              },
              {
                "@type": "SoftwareApplication",
                "name": "InfluenceIQ",
                "applicationCategory": "AnalysisApplication",
                "operatingSystem": "Web",
                "author": {
                  "@type": "Person",
                  "name": "Tanishq Kulkarni",
                  "jobTitle": "MERN Stack Developer",
                  "url": "https://tanishqkulkarni.com"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "description": "AI-based social media analyzer by Mumbai-based developer Tanishq Kulkarni"
              }
            ]
          })}
        </script>
      </Helmet>
      <TechStack />
      
      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-8">
        {['Projects', 'Hackathons', 'Certificates'].map((tab) => (
          <motion.button
            key={tab.toLowerCase()}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${activeTab === tab.toLowerCase() ? 'bg-[#00c2ff] text-black' : 'bg-[#1c1c1c] text-white hover:bg-[#2c2c2c]'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Projects Tab Content */}
      {activeTab === 'projects' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mt-8 sm:mt-12 max-w-6xl w-full px-4 sm:px-6">
          <ProjectCard 
            title="EduAI" 
            description="A personalized learning path dashboard for students and self-learners. AI-driven recommendations help users create customized educational roadmaps."
            liveLink="https://eduai-learn.vercel.app"  
            githubLink="https://github.com/TanishqMSD/EduAI" 
            imgSrc={EduAI}
            tags={["GenAI", "Personalized Courses","Roadmaps", "MERN Stack"]}
            techStack={["MongoDB", "Express", "React", "Node.js", "Gemini API"]}
            completionDate="February 2023"
            featured={true}
            role="Fullstack Developer"
          />
          <ProjectCard 
            title="Social Media Analyzer" 
            description="An AI-powered social media analyzer that provides deep insights into audience engagement, content performance, and growth opportunities." 
            liveLink="https://influence-iq.vercel.app" 
            githubLink="https://github.com/TanishqMSD/socialmedia-analyzer" 
            imgSrc={Influence}
            tags={["AI-Powered", "Data Analysis", "Social Media Insights"]}
            techStack={["React", "Node.js", "Express", "OpenAI API", "Chart.js"]}
            completionDate="April 2023"
            featured={true}
            role="Full Stack Developer"
          />
          <ProjectCard 
            title="Invoisify" 
            description="An Invoice Generator App with robust features for businesses and freelancers. Create, manage, and export professional invoices with ease."
            liveLink="https://invoisify-tech.vercel.app"  
            githubLink="https://github.com/TanishqMSD/invoisify" 
            imgSrc={Invoisify}
            tags={["OAuth Google Login", "HTML2PDF", "Template Storage", "In Progress"]}
            techStack={["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]}
            completionDate="June 2023 - Present"
            featured={true}
            role="Lead Developer"
          />
          <ProjectCard 
            title="College Transparency System" 
            description="Automated system for digital voting, facilities booking, and complaint management with real-time tracking and administrative dashboard."
            githubLink="https://github.com/TanishqMSD/hackfusion" 
            imgSrc={Hackfusion}
            tags={["College System", "Digital Voting", "Booking System"]}
            techStack={["MERN Stack", "Socket.io", "JWT", "Chart.js"]}
            completionDate="February 2023"
            featured={false}
            role="Full Stack Developer"
          />
          <ProjectCard 
            title="Car Driving Game" 
            description="Interactive 3D car driving game built with Three.js and React, featuring realistic physics and controls."
            githubLink="https://github.com/TanishqMSD/car-game" 
            imgSrc="https://placehold.co/600x400/1c1c1c/00c2ff?text=Car+Game&font=montserrat"
            tags={["3D Game", "Interactive", "Physics"]}
            techStack={["React", "Three.js", "React Three Fiber"]}
            completionDate="March 2023"
            featured={false}
            role="Frontend Developer"
          />
          <ProjectCard 
            title="YouTube Clone" 
            description="A responsive YouTube clone with video playback, search, and user authentication features."
            githubLink="https://github.com/TanishqMSD/youtube-clone" 
            imgSrc="https://placehold.co/600x400/1c1c1c/00c2ff?text=YouTube+Clone&font=montserrat"
            tags={["Video Platform", "Search", "Authentication"]}
            techStack={["React", "Firebase", "YouTube API"]}
            completionDate="April 2023"
            featured={false}
            role="Frontend Developer"
          />
          <ProjectCard 
            title="Parkly" 
            description="Vehicle parking management system with real-time space tracking and booking capabilities."
            githubLink="https://github.com/TanishqMSD/parkly" 
            imgSrc="https://placehold.co/600x400/1c1c1c/00c2ff?text=Parkly&font=montserrat"
            tags={["Parking Management", "Booking System"]}
            techStack={["PHP", "MySQL", "Bootstrap", "jQuery"]}
            completionDate="May 2023"
            featured={false}
            role="Full Stack Developer"
          />
          <ProjectCard 
            title="Filmzo" 
            description="OTT platform for streaming movies and TV shows with user profiles and recommendations."
            githubLink="https://github.com/TanishqMSD/filmzo" 
            imgSrc="https://placehold.co/600x400/1c1c1c/00c2ff?text=Filmzo&font=montserrat"
            tags={["OTT Platform", "Streaming", "User Profiles"]}
            techStack={["HTML", "Bootstrap", "JavaScript", "PHP"]}
            completionDate="June 2023"
            featured={false}
            role="Full Stack Developer"
          />
          <ProjectCard 
            title="RateAPI" 
            description="Crowdsourced API rating and recommendation platform. Currently in development."
            githubLink="https://github.com/TanishqMSD/rateapi" 
            imgSrc="https://placehold.co/600x400/1c1c1c/00c2ff?text=RateAPI&font=montserrat"
            tags={["API Rating", "Crowdsourcing", "In Progress"]}
            techStack={["MERN Stack", "GraphQL", "JWT"]}
            completionDate="Ongoing"
            featured={false}
            role="Fullstack Developer"
          />
          <ProjectCard 
            title="Labrooms" 
            description="No-login collaboration platform for students to save and share lab work using WhatsApp or email authentication."
            githubLink="https://github.com/TanishqMSD/labrooms" 
            imgSrc="https://placehold.co/600x400/1c1c1c/00c2ff?text=Labrooms&font=montserrat"
            tags={["Collaboration", "Education", "In Progress"]}
            techStack={["Next.js", "Firebase", "WhatsApp API"]}
            completionDate="Ongoing"
            featured={false}
            role="Fullstack Developer"
          />
        </div>
      )}

      {/* Hackathons Tab Content */}
      {activeTab === 'hackathons' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mt-8 sm:mt-12 max-w-6xl w-full px-4 sm:px-6">
          <ProjectCard 
            title="LevelSupermind" 
            description="Automated Research Tracking tool for Social Media Influencers developed at LevelSuperMind Hackathon. Features web scraping and GenAI integration for real-time content analysis and trend detection." 
            githubLink="https://github.com/TanishqMSD/AdVise" 
            imgSrc={Level}
            tags={["Web Scraping", "GenAI", "Analytics", "📍 Schbang, Lower Parel, Mumbai"]}
            videoLink="https://youtu.be/u1NYjj31y-s?si=APqckAQZbq4URrrj"
            techStack={["React", "Node.js", "Puppeteer", "OpenAI API", "MongoDB"]}
            completionDate="October 2023"
            featured={true}
            role="Team Lead & Backend Developer"
          />
          <ProjectCard 
            title="Hackfusion 2.O" 
            description="Automated Transparent College System built at Hackfusion. Features digital voting, facilities booking, and complaint management with real-time status tracking and administrative dashboard." 
            githubLink="https://github.com/TanishqMSD/hackfusion" 
            imgSrc={Hackfusion}
            tags={["College System", "Digital Voting", "Booking System", "📍 SGGSIET Nanded"]}
            videoLink="https://youtu.be/P8no7VJU9aU?si=BoSgq8spBwn0TxX4"
            techStack={["MERN Stack", "Socket.io", "JWT", "Chart.js"]}
            completionDate="February 2023"
            featured={false}
            role="Full Stack Developer"
          />
          <ProjectCard 
            title="Quasar 3.O" 
            description="Personalized learning path dashboard created at Quasar 3.0. AI-driven education tracking and recommendations with progress visualization and adaptive learning features." 
            githubLink="https://github.com/TanishqMSD/EduAi" 
            imgSrc={Quasar} 
            tags={["AI Education", "Learning Analytics", "Dashboard", "📍 VPPCOE, Sion, Mumbai"]}
            videoLink="https://youtu.be/EUOojvNZqew?si=D1vsd1UiU1X3cSUD"
            techStack={["React", "Node.js", "Express", "MongoDB", "AI APIs"]}
            completionDate="December 2022"
            featured={false}
            role="Frontend Developer"
          />
        </div>
      )}

      {/* Certificates Tab Content */}
      {activeTab === 'certificates' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mt-8 sm:mt-12 max-w-6xl w-full px-4 sm:px-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-lg bg-[#1c1c1c] border border-cyan-500/20"
          >
            <img src={CerLevel} alt="LevelSupermind Certificate" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-[#00c2ff] text-xl font-bold">LevelSupermind Hackathon</h3>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-lg bg-[#1c1c1c] border border-cyan-500/20"
          >
            <img src={CerHackfusion} alt="Hackfusion Certificate" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-[#00c2ff] text-xl font-bold">Hackfusion 2.O</h3>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-lg bg-[#1c1c1c] border border-cyan-500/20"
          >
            <img src={CerQuasar} alt="Quasar Certificate" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-[#00c2ff] text-xl font-bold">Quasar 3.O</h3>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;
