import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Home from './Home'

function App() {
  return (
    <Router>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Tanishq Kulkarni",
            "alternateName": "Tanishq Codes",
            "jobTitle": "MERN Stack Developer",
            "description": "Skilled Web Developer based in Mumbai, specializing in MERN stack development. VIT graduate offering professional web development services.",
            "url": "https://tanishqkulkarni.com",
            "image": "https://tanishqkulkarni.com/assets/tanisParel.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "India"
            },
            "alumniOf": [
              {
                "@type": "EducationalOrganization",
                "name": "Vidyalankar Institute of Technology (VIT)",
                "sameAs": "https://vit.edu.in"
              },
              {
                "@type": "EducationalOrganization",
                "name": "Government Polytechnic, Thane"
              }
            ],
            "knowsAbout": ["MERN Stack Development", "React", "Node.js", "JavaScript", "Web Development", "Frontend Development", "MongoDB", "Express.js"],
            "sameAs": [
              "https://github.com/TanishqMSD",
              "https://www.linkedin.com/in/tanishq-kulkarni"
            ]
          })}
        </script>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
