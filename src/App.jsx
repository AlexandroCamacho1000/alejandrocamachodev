import React from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import EngineeringBackground from "./components/EngineeringBackground/EngineeringBackground";
import Skills from "./components/Skills/Skills";
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
      <Projects />
      <Experience />
      <EngineeringBackground />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
