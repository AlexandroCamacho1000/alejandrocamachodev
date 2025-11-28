// ───────── Projects.jsx ─────────

import './Projects.css';
import ProjectCard from './ProjectCard';
import testimonialsImg from "../../../public/testimonials.png";
import clickCounterImg from "../../../public/clickcounter.png";

function Projects() {
  const projects = [
    { 
      title: "Testimonials App", 
      description: "Built with React, reusable components, and CSS for layout and styling.",
      link: "https://github.com/tuusuario/testimonials-app",
      image: testimonialsImg
    },
    { 
      title: "Click Counter App", 
      description: "React app using state management and functional components with CSS styling.",
      link: "https://github.com/tuusuario/click-counter-app",
      image: clickCounterImg
    },
    { 
      title: "Task Manager App", 
      description: "React app with local storage, functional components, and responsive CSS.",
      link: "#",
      image: testimonialsImg
    },
    { 
      title: "Weather Dashboard", 
      description: "React app consuming public APIs, with reusable components and CSS layout.",
      link: "#",
      image: clickCounterImg
    },
    { 
      title: "Portfolio Website", 
      description: "Built in React with component-based architecture and CSS for responsive design.",
      link: "#",
      image: testimonialsImg
    },
    { 
      title: "E-commerce UI", 
      description: "React frontend with modular components and CSS styling for product display.",
      link: "#",
      image: clickCounterImg
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Web Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
