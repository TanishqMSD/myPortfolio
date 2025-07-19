import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import Vit from "../assets/vit.jpg";
import Skp from "../assets/skpatil.jpeg";
import Gpt from "../assets/gpt.jpg";

const educationData = [
  {
    title: "Bachelor's in Computer Engineering",
    description: "Pursuing a degree in Computer Engineering with 9.7 CGPA",
    year: "2024 - Present",
    imgSrc: Vit,
    tags: ["Computer Engineering", "Degree", "9.7 CGPA"]
  },
  {
    title: "Diploma in Computer Engineering",
    description: "Government Polytechnic, Thane - 91.18%",
    year: "2021 - 2024",
    imgSrc: Gpt,
    tags: ["Computer Engineering", "Diploma", "91.18%"]
  }
];

const Education = () => {
  return (
    <>
      <Helmet>
        <title>Education | Tanishq Kulkarni - Academic Background</title>
        <meta name="description" content="Learn about Tanishq Kulkarni's educational journey, including Computer Engineering Diploma and Bachelor's in Computer Science. Mumbai-based web developer's academic achievements." />
        <meta name="keywords" content="Tanishq Kulkarni education, Computer Science degree, Mumbai education, web development studies" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": educationData.map((edu, index) => ({
              "@type": "EducationalOccupationalCredential",
              "name": edu.title,
              "description": edu.description,
              "educationalLevel": edu.tags[0],
              "dateCreated": edu.year
            }))
          })}
        </script>
      </Helmet>
    <div className="flex items-center justify-center"><span className="text-white text-3xl font-bold py-8">Education</span></div>
    <div className="relative flex flex-col items-center py-10">
      
      <div className="absolute w-1 bg-blue-500 h-full left-1/2 transform -translate-x-1/2 animate-pulse"></div>
      
      <div className="relative w-full max-w-3xl flex flex-col items-center">
        {educationData.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="relative flex items-center w-full mb-10"
          >
            {index % 2 === 0 ? (
              <>
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-[#1c1c1c] shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 rounded-xl overflow-hidden transition-all duration-300 p-6 border-2 border-transparent hover:border-blue-500/50 bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a]">
                    <div className="w-full h-64 overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-[1.02] relative group">
                      <img src={edu.imgSrc} alt={edu.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-[#00c2ff] text-xl font-bold mt-6 mb-3">{edu.title}</h3>
                    <p className="text-gray-300 mt-2 text-base leading-relaxed">{edu.description}</p>
                    <span className="text-gray-400 block mt-3 text-sm">{edu.year}</span>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.tags.map((tag, i) => (
                        <span key={i} className="bg-gradient-to-r from-blue-400 to-blue-500 text-black px-4 py-1.5 rounded-full text-sm font-semibold transform hover:scale-105 transition-transform duration-200 shadow-md">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                </div>
              </>
            ) : (
              <>
                <div className="w-1/2 flex justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-[#1c1c1c] shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 rounded-xl overflow-hidden transition-all duration-300 p-6 border-2 border-transparent hover:border-blue-500/50 bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a]">
                    <div className="w-full h-64 overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-[1.02] relative group">
                      <img src={edu.imgSrc} alt={edu.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-[#00c2ff] text-xl font-bold mt-6 mb-3">{edu.title}</h3>
                    <p className="text-gray-300 mt-2 text-base leading-relaxed">{edu.description}</p>
                    <span className="text-gray-400 block mt-3 text-sm">{edu.year}</span>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.tags.map((tag, i) => (
                        <span key={i} className="bg-gradient-to-r from-blue-400 to-blue-500 text-black px-4 py-1.5 rounded-full text-sm font-semibold transform hover:scale-105 transition-transform duration-200 shadow-md">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Education;
