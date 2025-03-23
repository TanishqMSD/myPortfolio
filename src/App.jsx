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
            "jobTitle": "Web Developer",
            "url": "https://tanishqkulkarni.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "India"
            },
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
