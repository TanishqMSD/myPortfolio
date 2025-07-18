import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaAws, FaDatabase, FaCube, FaJava } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiExpress, SiMongodb, SiTailwindcss, SiPhp, SiMysql, SiOpenai, SiGooglegemini, SiPython, SiTypescript, SiNextdotjs, SiFirebase, SiRedux, SiGraphql, SiThreedotjs, SiCplusplus, SiC } from 'react-icons/si';
import LangflowLogo from '../assets/langflow.png';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'C', icon: <SiC className="text-blue-500" />, level: 95 },
        { name: 'C++', icon: <SiCplusplus className="text-red-500" />, level: 90 },
        { name: 'Java', icon: <FaJava className="text-orange-500" />, level: 80 },
        { name: 'VB.NET', icon: <FaDatabase className="text-purple-500" />, level: 70 },
      ],
    },
    {
      name: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" />, level: 100 },
        { name: 'CSS3', icon: <SiCss3 className="text-blue-500" />, level: 100 },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 100 },
        { name: 'React.js', icon: <FaReact className="text-blue-500" />, level: 90 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, level: 95 },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, level: 40 },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, level: 10 },
        { name: 'Redux', icon: <SiRedux className="text-purple-500" />, level: 80 },
        { name: 'Three.js', icon: <SiThreedotjs className="text-white" />, level: 75 },
        { name: 'shadcn/ui', icon: <FaCube className="text-gray-400" />, level: 100 },
      ],
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 90 },
        { name: 'Express.js', icon: <SiExpress className="text-gray-400" />, level: 80 },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, level: 80 },
        { name: 'PHP', icon: <SiPhp className="text-purple-500" />, level: 90 },
        { name: 'MySQL', icon: <SiMysql className="text-blue-400" />, level: 100 },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, level: 40 },
      ],
    },
    {
      name: 'AI & Tools',
      skills: [
        { name: 'OpenAI', icon: <SiOpenai className="text-blue-400" />, level: 85 },
        { name: 'Gemini', icon: <SiGooglegemini className="text-green-400" />, level: 80 },
        { name: 'Langflow', icon: <img src={LangflowLogo} alt="Langflow" className="w-6 h-6" />, level: 75 },
        { name: 'Python', icon: <SiPython className="text-blue-500" />, level: 50 },
        { name: 'Git', icon: <FaGitAlt className="text-red-500" />, level: 85 },
        { name: 'Docker', icon: <FaDocker className="text-blue-500" />, level: 10 },
        { name: 'AWS', icon: <FaAws className="text-yellow-500" />, level: 20 },
        { name: 'Figma', icon: <FaFigma className="text-purple-400" />, level: 40 },
      ],
    },
  ];

  return (
    <div className="py-16 px-6">
      <Helmet>
        <title>Skills | Tanishq Kulkarni - MERN Stack Developer in Mumbai</title>
        <meta name="description" content="Explore Tanishq Kulkarni's technical skills and expertise in web development, including frontend, backend, and AI technologies." />
        <meta name="keywords" content="Tanishq Kulkarni skills, MERN stack developer Mumbai, React developer, Node.js developer, web development skills" />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          My <span className="text-[#00c2ff]">Skills</span>
        </motion.h1>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#00c2ff] mb-8">{category.name}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 194, 255, 0.3)' }}
                    className="bg-[#1c1c1c] rounded-xl p-6 border border-gray-800 hover:border-[#00c2ff] transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{skill.icon}</div>
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    </div>
                    
                    <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
                      <motion.div 
                        className="bg-[#00c2ff] h-2.5 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + (skillIndex * 0.1) }}
                      />
                    </div>
                    <div className="text-right text-sm text-gray-400">{skill.level}%</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-[#131314] to-[#1c1c1c] rounded-xl p-8 border border-gray-800"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#00c2ff] mb-4">Continuous Learning</h2>
          <p className="text-gray-300 mb-6">
            I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best practices in web development. 
            Currently exploring more about AI integration, cloud architecture, and advanced React patterns.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Microservices', 'CI/CD', 'Testing', 'Performance Optimization', 'Accessibility', 'Web3'].map((item, index) => (
              <span key={index} className="bg-[#00c2ff]/10 text-[#00c2ff] px-3 py-1 rounded-md text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;