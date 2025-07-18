import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Skills from "./components/Skills";

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating the preloader duration
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000); // Adjust duration as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Preloader />
            ) : (
                <>
                    <Navbar />
                    <Element name="home">
                        <HeroSection />
                    </Element>
                    <Element name="skills">
                        <Skills />
                    </Element>
                    <Element name="projects">
                        <Projects />
                    </Element>
                    <Element name="education">
                        <Education />
                    </Element>
                    <Element name="contact">
                        <Contact />
                    </Element>
                </>
            )}
        </>
    );
}

export default Home;
