const translations = {
  en: {
    nav: {
      home: "Home",
      hero: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Alejandro Camacho",
      role: "Engineer & Full Stack Developer",
      summary:
        "Electronic Engineer with 6+ years running enterprise networks, servers and infrastructure. Today I build full-stack web apps with React, Node.js, Express and PostgreSQL — engineering discipline in every layer.",
      downloadCV: "Download CV",
      contact: "Contact Me",
      alt: "Photo of Alejandro Camacho",
    },
    about: {
      title: "About Me",
      p1: "I'm an Electronic Engineer turned Full Stack Developer. I build modern, scalable web applications with React, Node.js, Express and PostgreSQL, following clean and maintainable coding practices.",
      p2: "My 6+ years as a Network Engineer and Systems Administrator (2016–2022) gave me deep, hands-on experience with corporate networks, servers, virtualization and production infrastructure — a foundation I now apply to building reliable backends and robust software.",
      p3: "I'm focused on growing as a full-stack developer, delivering solutions that combine solid engineering with modern, user-centered experiences.",
      p4: "I integrate AI tools into my workflow (GitHub Copilot, Claude, ChatGPT, Gemini) to accelerate development, automate repetitive tasks and optimize delivery times — while keeping code quality and a solid command of fundamentals.",
      facts: [
        { label: "Location", value: "Bolivia" },
        { label: "Engineering Degree", value: "Electronic Engineer" },
        { label: "Experience", value: "6+ years as Network Engineer" },
        { label: "Focus", value: "Full Stack Web Development" },
        { label: "Email", value: "alejandrocc1955@gmail.com" },
      ],
    },
    projects: {
      title: "Web Projects",
      subtitle: "Some things I've built recently.",
      view: "Repository",
      viewApp: "Live Demo",
      items: [
        {
          title: "Pokemón App",
          description:
            "Full-stack application with React, Node.js, Express, PostgreSQL and Sequelize. It integrates data from a custom REST API and the PokéAPI, with full CRUD, filtering and sorting.",
          tech: ["React", "Node.js", "Express", "PostgreSQL", "Sequelize"],
        },
        {
          title: "Weather App",
          description:
            "React application built with Vite and Tailwind CSS that consumes the OpenWeatherMap API. Users can check current weather and forecasts for any city.",
          tech: ["React", "Vite", "Tailwind CSS", "REST API"],
        },
        {
          title: "Portfolio Website",
          description:
            "Personal portfolio built with React and Vite, styled entirely with CSS. It showcases component-based architecture and clean code.",
          tech: ["React", "Vite", "CSS3"],
        },
        {
          title: "Calculator App",
          description:
            "React application built with reusable components that performs real-time arithmetic operations, demonstrating state management and component composition.",
          tech: ["React", "CSS3"],
        },
        {
          title: "To Do App",
          description:
            "React application that lets users add, complete and delete tasks efficiently, demonstrating state management and a clean component architecture.",
          tech: ["React", "CSS3"],
        },
        {
          title: "Testimonials App",
          description:
            "Built with React, reusable components and CSS for layout and styling.",
          tech: ["React", "CSS3"],
        },
        {
          title: "Click Counter App",
          description:
            "React app using state management and functional components with CSS styling.",
          tech: ["React", "CSS3"],
        },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I work with.",
      technicalTitle: "Technical Skills",
      softTitle: "Soft Skills",
      aiTitle: "AI & Development Tools",
      devopsTitle: "DevOps & Testing",
      technical: {
        react: "React.js",
        javascript: "JavaScript",
        node: "Node.js",
        express: "Express.js",
        postgresql: "PostgreSQL",
        css: "CSS3",
        tailwind: "Tailwind CSS",
        github: "GitHub",
        jira: "Jira",
        scrum: "Scrum",
      },
      soft: {
        teamwork: "Teamwork",
        communication: "Effective Communication",
        pressure: "Work Under Pressure",
        support: "User Support",
        resolution: "Technical Issue Resolution",
        trust: "User Trust",
        time: "Time Management",
      },
      ai: {
        copilot: "GitHub Copilot",
        claude: "Claude",
        chatgpt: "ChatGPT",
        gemini: "Google Gemini",
      },
      devops: {
        docker: "Docker",
        githubactions: "GitHub Actions",
        jest: "Jest",
        testingLibrary: "Testing Library",
        vercel: "Vercel",
        netlify: "Netlify",
        githubpages: "GitHub Pages",
      },
    },
    experience: {
      title: "Experience",
      subtitle: "Where I've worked and what I've built.",
      jobs: [
        {
          role: "Network Engineer & Systems Administrator",
          company: "Electric Utility Company",
          period: "2016 – 2022",
          description:
            "6+ years owning the company's network infrastructure, servers and IT systems — guaranteeing availability, security and performance across critical services. Hands-on with routers, switches, virtualization and production infrastructure.",
          achievements: [
            "Kept corporate networks, servers and critical systems running with high availability.",
            "Automated operational processes, cutting downtime and manual work.",
            "Led infrastructure projects and provided technical support to the whole organization.",
          ],
          tech: ["Networking", "Servers", "Systems Administration", "Automation"],
        },
      ],
    },
    education: {
      title: "Education",
      subtitle: "My academic and professional training.",
      items: [
        {
          degree: "Electronic Engineering",
          institution: "Universidad Mayor de San Simón (UMSS)",
          year: "",
        },
        {
          degree: "Professional Certifications",
          institution: "Cisco and other networking certifications",
          year: "",
        },
        {
          degree: "Full Stack Development Bootcamp",
          institution: "Henry",
          year: "",
        },
      ],
    },
    contact: {
      title: "Contact Me",
      subtitle:
        "Have a project in mind? Let's take it from idea to a working web app — send me a message.",
    },
    footer: {
      rights: "© 2026 Alejandro Camacho. Almost all rights reserved.",
      sig: "</AlejandroCamacho>",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      hero: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Alejandro Camacho",
      role: "Ingeniero & Desarrollador Full Stack",
      summary:
        "Ingeniero Electrónico con más de 6 años dirigiendo redes empresariales, servidores e infraestructura. Hoy construyo aplicaciones web full-stack con React, Node.js, Express y PostgreSQL — disciplina de ingeniería en cada capa.",
      downloadCV: "Descargar CV",
      contact: "Contáctame",
      alt: "Foto de Alejandro Camacho",
    },
    about: {
      title: "Sobre mí",
      p1: "Soy Ingeniero Electrónico y Desarrollador Full Stack. Construyo aplicaciones web modernas y escalables con React, Node.js, Express y PostgreSQL, siguiendo prácticas de código limpio y mantenible.",
      p2: "Mis más de 6 años como Ingeniero de Redes y Responsable de Sistemas (2016–2022) me dieron experiencia práctica profunda en redes corporativas, servidores, virtualización e infraestructura de producción — una base que hoy aplico al construir backends confiables y software robusto.",
      p3: "Estoy enfocado en crecer como desarrollador full-stack, entregando soluciones que combinan ingeniería sólida con experiencias modernas centradas en el usuario.",
      p4: "Integro herramientas de IA en mi flujo de trabajo (GitHub Copilot, Claude, ChatGPT, Gemini) para acelerar el desarrollo, automatizar tareas repetitivas y optimizar los tiempos de entrega — manteniendo la calidad del código y un sólido dominio de los fundamentos.",
      facts: [
        { label: "Ubicación", value: "Bolivia" },
        { label: "Título de Ingeniero", value: "Ingeniero Electrónico" },
        { label: "Experiencia", value: "6+ años como Ingeniero de Redes" },
        { label: "Enfoque", value: "Desarrollo Web Full Stack" },
        { label: "Email", value: "alejandrocc1955@gmail.com" },
      ],
    },
    projects: {
      title: "Proyectos Web",
      subtitle: "Algunas cosas que he construido recientemente.",
      view: "Repositorio",
      viewApp: "Demo en vivo",
      items: [
        {
          title: "Pokemón App",
          description:
            "Aplicación full-stack con React, Node.js, Express, PostgreSQL y Sequelize. Integra datos de una API REST personalizada y de la PokéAPI, con CRUD completo, filtrado y ordenamiento.",
          tech: ["React", "Node.js", "Express", "PostgreSQL", "Sequelize"],
        },
        {
          title: "Weather App",
          description:
            "Aplicación React construida con Vite y Tailwind CSS que consume la API de OpenWeatherMap. Los usuarios pueden consultar el clima actual y el pronóstico de cualquier ciudad.",
          tech: ["React", "Vite", "Tailwind CSS", "REST API"],
        },
        {
          title: "Portfolio Website",
          description:
            "Portafolio personal construido con React y Vite, estilizado enteramente con CSS. Muestra arquitectura basada en componentes y código limpio.",
          tech: ["React", "Vite", "CSS3"],
        },
        {
          title: "Calculator App",
          description:
            "Aplicación React construida con componentes reutilizables que realiza operaciones aritméticas en tiempo real, demostrando gestión de estado y composición de componentes.",
          tech: ["React", "CSS3"],
        },
        {
          title: "To Do App",
          description:
            "Aplicación React que permite añadir, completar y eliminar tareas de forma eficiente, demostrando gestión de estado y una arquitectura de componentes limpia.",
          tech: ["React", "CSS3"],
        },
        {
          title: "Testimonials App",
          description:
            "Construida con React, componentes reutilizables y CSS para el layout y el estilo.",
          tech: ["React", "CSS3"],
        },
        {
          title: "Click Counter App",
          description:
            "Aplicación React que usa gestión de estado y componentes funcionales con estilos CSS.",
          tech: ["React", "CSS3"],
        },
      ],
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías y herramientas con las que trabajo.",
      technicalTitle: "Habilidades Técnicas",
      softTitle: "Habilidades Blandas",
      aiTitle: "IA y Herramientas de Desarrollo",
      devopsTitle: "DevOps y Testing",
      technical: {
        react: "React.js",
        javascript: "JavaScript",
        node: "Node.js",
        express: "Express.js",
        postgresql: "PostgreSQL",
        css: "CSS3",
        tailwind: "Tailwind CSS",
        github: "GitHub",
        jira: "Jira",
        scrum: "Scrum",
      },
      soft: {
        teamwork: "Trabajo en equipo",
        communication: "Comunicación efectiva",
        pressure: "Trabajo bajo presión",
        support: "Soporte al usuario",
        resolution: "Resolución de problemas técnicos",
        trust: "Confianza del usuario",
        time: "Gestión del tiempo",
      },
      ai: {
        copilot: "GitHub Copilot",
        claude: "Claude",
        chatgpt: "ChatGPT",
        gemini: "Google Gemini",
      },
      devops: {
        docker: "Docker",
        githubactions: "GitHub Actions",
        jest: "Jest",
        testingLibrary: "Testing Library",
        vercel: "Vercel",
        netlify: "Netlify",
        githubpages: "GitHub Pages",
      },
    },
    experience: {
      title: "Experiencia",
      subtitle: "Dónde he trabajado y qué he construido.",
      jobs: [
        {
          role: "Ingeniero de Redes y Responsable de Sistemas",
          company: "Empresa Eléctrica",
          period: "2016 – 2022",
          description:
            "Más de 6 años a cargo de la infraestructura de red, los servidores y los sistemas de TI de la empresa — garantizando disponibilidad, seguridad y rendimiento de los servicios críticos. Experiencia operativa con routers, switches, virtualización e infraestructura de producción.",
          achievements: [
            "Mantuve redes corporativas, servidores y sistemas críticos operando con alta disponibilidad.",
            "Automaticé procesos operativos, reduciendo tiempos de inactividad y trabajo manual.",
            "Lideré proyectos de infraestructura y brindé soporte técnico a toda la organización.",
          ],
          tech: ["Redes", "Servidores", "Administración de Sistemas", "Automatización"],
        },
      ],
    },
    education: {
      title: "Educación",
      subtitle: "Mi formación académica y profesional.",
      items: [
        {
          degree: "Ingeniería Electrónica",
          institution: "Universidad Mayor de San Simón (UMSS)",
          year: "",
        },
        {
          degree: "Certificaciones Profesionales",
          institution: "Cisco y otras certificaciones de redes",
          year: "",
        },
        {
          degree: "Bootcamp de Desarrollo Full Stack",
          institution: "Henry",
          year: "",
        },
      ],
    },
    contact: {
      title: "Contáctame",
      subtitle:
        "¿Tienes un proyecto en mente? Llevémoslo de la idea a una app web funcionando — escríbeme.",
    },
    footer: {
      rights: "© 2026 Alejandro Camacho. Casi todos los derechos reservados.",
      sig: "</AlejandroCamacho>",
    },
  },
};

export default translations;
