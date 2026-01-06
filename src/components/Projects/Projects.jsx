// ───────── Projects.jsx ─────────

import './Projects.css';
import ProjectCard from './Projectcard';
import testimonialsImg from "../../../public/testimonials.png";
import clickCounterImg from "../../../public/clickcounter.png";
import calculatorImg from "../../../public/calculator.png";
import todoImg from "../../../public/to-do.png";
import portfolioImg from "../../../public/portfolio.png";
import weatherImg from "../../../public/weather.png";
import pokemonImg from "../../../public/pokemon.png";

function Projects() {
  const projects = [
    { 
      title: "Testimonials App", 
      description: "Built with React, reusable components, and CSS for layout and styling.",
      link: "https://github.com/AlexandroCamacho1000/TestimonialAppByAle",
      image: testimonialsImg
    },
    { 
      title: "Click Counter App", 
      description: "React app using state management and functional components with CSS styling.",
      link: "https://github.com/AlexandroCamacho1000/ClickCounterByAle",
      image: clickCounterImg
    },
    { 
      title: "Calculator App", 
      description: " Calculator is a React web application built with reusable components, allowing users to perform real-time arithmetic operations. The app demonstrates state management, component composition, and clean code practices in React.",
      link: "https://github.com/AlexandroCamacho1000/CalculatorAppByAle",
      image: calculatorImg
    },
    { 
      title: "To Do App", 
      description: "This is a React web application built with reusable components, enabling users to add, complete, and delete tasks efficiently while demonstrating state management and clean component architecture.",
      link: "https://github.com/AlexandroCamacho1000/To-DoAppByAle",
      image: todoImg
    },
    { 
      title: "Portfolio Website", 
      description: "A personal portfolio web application built and designed in React with Vite, styled entirely with CSS. It showcases component-based architecture and highlights my skills as a Full-Stack Developer.",
      link: "https://github.com/AlexandroCamacho1000/alejandrocamachodev",
      image: portfolioImg
    },
    { 
      title: "Weather App", 
      description: "A React web application built with Vite and Tailwind CSS that consumes data from the OpenWeatherMap API. Users can check the current weather and forecast for any city, showcasing component-based architecture and state management.",
      link: "https://github.com/AlexandroCamacho1000/WeatherAppByAle",
      image: weatherImg
    },
     { 
      title: "Pokemón App", 
      description: "A web application built with React on the frontend and Node.js, Express, and PostgreSQL on the backend using Sequelize. It integrates data from a custom REST API and the PokéAPI, allowing full CRUD operations, filtering, sorting, and detailed Pokémon data management.",
      link: "https://github.com/AlexandroCamacho1000/PokemonAppByAle",
      linkApp: "https://pokemon-app-by-ale-ncp5.vercel.app",
      image: pokemonImg
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
