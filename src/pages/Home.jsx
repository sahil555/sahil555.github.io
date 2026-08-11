import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Architecture from "../components/Architecture";
import AISection from "../components/AISection";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Metrics />
                <About />
                <Experience />
                <Projects />
                <Architecture />
                <AISection />
                <Skills />
                <Education />
                <Certifications />
                <Contact />
            </main>

            <Footer />
        </>
    );
}