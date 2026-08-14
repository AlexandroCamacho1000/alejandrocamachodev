import React from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <About />
      <Contact />
      <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
