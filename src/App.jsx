import React from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import EngineeringBackground from "./components/EngineeringBackground/EngineeringBackground";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import FeaturedProject from "./components/FeaturedProject/FeaturedProject";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
      <div className="app-container">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <EngineeringBackground />
      <Experience />
      <Skills />
      <FeaturedProject />
      <Projects />
      <About />
      <Education />
      <Contact />
      <Footer />
      </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
