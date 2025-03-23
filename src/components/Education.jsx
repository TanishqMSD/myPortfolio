import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import Vit from "../assets/vit.jpg";
import Skp from "../assets/skpatil.jpeg";
import Gpt from "../assets/gpt.jpg";

const educationData = [
  {
    title: "Secondary School Certification",
    description: "Completed my high school education.",
    year: "2020",
    imgSrc: Skp,
    tags: ["SSC", "Academic Excellence"]
  },
  {
    title: "Diploma in Computer Engineering",
    description: "Government Polytechnic, Thane",
    year: "2021 - 2024",
    imgSrc: Gpt,
    tags: ["Computer Science", "Diploma"]
  },
  {
    title: "Bachelor's in Computer Science",
    description: "Pursuing a degree in Computer Science.",
    year: "2024 - Present",
    imgSrc: Vit, // Updated to Vit since it was previously an incorrect string path
    tags: ["Computer Science", "Degree"]
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
                  <div className="bg-[#1c1c1c] shadow-lg rounded-xl overflow-hidden transition-transform duration-300 p-6 border border-blue-500">
                    <div className="w-full h-48">
                      <img src={edu.imgSrc} alt={edu.title} className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <h3 className="text-[#00c2ff] text-lg font-bold mt-4">{edu.title}</h3>
                    <p className="text-gray-400 mt-2">{edu.description}</p>
                    <span className="text-gray-500">{edu.year}</span>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.tags.map((tag, i) => (
                        <span key={i} className="bg-blue-400 text-black px-3 py-1 rounded-md text-sm font-semibold">{tag}</span>
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
                  <div className="bg-[#1c1c1c] shadow-lg rounded-xl overflow-hidden transition-transform duration-300 p-6 border border-blue-500">
                    <div className="w-full h-32">
                      <img src={edu.imgSrc} alt={edu.title} className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <h3 className="text-[#00c2ff] text-lg font-bold mt-4">{edu.title}</h3>
                    <p className="text-gray-400 mt-2">{edu.description}</p>
                    <span className="text-gray-500">{edu.year}</span>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.tags.map((tag, i) => (
                        <span key={i} className="bg-blue-400 text-black px-3 py-1 rounded-md text-sm font-semibold">{tag}</span>
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
