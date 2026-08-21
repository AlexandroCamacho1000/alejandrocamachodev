const translations = {
  en: {
    nav: {
      home: "Home",
      hero: "Home",
      background: "Background",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Alejandro Camacho",
      role: "Electronic Engineer | Full-Stack Developer",
      summary:
        "I build software solutions that turn technical challenges into practical, reliable products. As an Electronic Engineer, I combine hands-on software development with professional experience in networking and infrastructure, applying an engineering mindset focused on architecture, security, and reliability.",
      viewProjects: "View Projects",
      downloadCV: "Download Resume",
      alt: "Photo of Alejandro Camacho",
    },
    background: {
      title: "Applying Engineering to Software Development",
      subtitle: "Building software with an engineering mindset.",
      blocks: [
        {
          title: "Engineering Mindset",
          tags: ["Analytical thinking", "Problem solving", "Systems thinking"],
        },
        {
          title: "Technical Foundation",
          tags: ["Systems", "Networks", "Infrastructure"],
        },
        {
          title: "Software Development",
          tags: ["React", "Node.js", "PostgreSQL", "REST APIs"],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "End-to-end solutions.",
      view: "View Code",
      viewApp: "Live Demo",
      viewVideo: "Demo Video",
      viewPlatform: "Team",
      openImage: "View project image",
      closeImage: "Close",
      featured: {
        tag: "Team Project",
        technologiesLabel: "Technologies",
        featuresLabel: "Features",
        title: "App BiT",
        short:
          "B2G platform that helps public managers decide where to invest. It crosses territorial connectivity data with key social indicators and an AI assistant that answers in natural language to generate reports in seconds.",
        highlights: ["Zone Comparison", "AI Chat", "Data Reports"],
        technologies: ["JavaScript", "React", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Docker"],
        demo: "https://s06-26-nc-equipo-69-b2g-frontend.vercel.app/",
        repo: "https://github.com/No-Country-simulation/s06-26-nc-equipo-69-b2g",
        platform: "https://nocountry.tech/simulacion-laboral-junio-2026/cmq1z370p00a9i201pi4438r1",
      },
      othersTitle: "Selected Projects",
      items: [
        {
          title: "Weather App",
          tag: "Personal Project",
          short:
            "Interactive weather app for current conditions and forecasts in cities worldwide. It consumes the OpenWeatherMap API and lets you search any city instantly.",
          description:
            "Weather application that provides current conditions and forecasts for cities around the world through the OpenWeatherMap API.",
          tech: ["JavaScript", "React", "Vite", "Tailwind CSS", "REST API"],
          highlights: ["City Search", "Current Conditions", "Forecasts"],
        },
        {
          title: "Pokémon App",
          tag: "Personal Project",
          short:
            "Full-stack app that acts as an interactive Pokédex. It consumes the official PokéAPI and uses a custom backend with PostgreSQL and Sequelize for data persistence, enabling full CRUD and advanced search.",
          description:
            "Full-stack application to explore and manage Pokémon data, consuming the official PokéAPI and exposing a custom REST API with PostgreSQL and Sequelize.",
          tech: ["JavaScript", "React", "Node.js", "Express", "PostgreSQL", "Sequelize", "REST API"],
          highlights: ["Search", "Filtering", "Sorting", "CRUD"],
          demo: "https://pokemon-app-by-ale-ncp5.vercel.app/",
          repo: "https://github.com/AlexandroCamacho1000/PokemonAppByAle",
        },
      ],
    },
    certifications: {
      title: "Certifications",
      subtitle: "Professional certifications.",
      items: [
        {
          degree: "Cisco Certified Network Associate (CCNA)",
          institution: "Cisco",
          year: "",
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      subtitle: "The technologies I build software with.",
      frontendTitle: "Frontend",
      backendTitle: "Backend",
      databaseTitle: "Database",
      cloudTitle: "Tools & Cloud",
      frontend: {
        javascript: "JavaScript",
        react: "React",
        html: "HTML",
        css: "CSS",
        tailwind: "Tailwind CSS",
      },
      backend: {
        node: "Node.js",
        express: "Express",
        rest: "REST APIs",
      },
      database: {
        postgresql: "PostgreSQL",
        sql: "SQL",
        sequelize: "Sequelize",
      },
      cloud: {
        git: "Git",
        github: "GitHub",
        aws: "AWS",
        docker: "Docker",
      },
    },
    journey: {
      title: "My Journey",
      subtitle: "From Engineering to Software Development.",
      nodes: [
        {
          title: "Electronic Engineer",
          meta: "UMSS",
          description: "Engineering foundation.",
        },
        {
          title: "Systems & Network Engineer",
          meta: "2016 – 2022",
          tags: ["Networks", "Systems", "Infrastructure", "Technical Problem Solving"],
        },
        {
          title: "Full Stack Developer",
          meta: "",
          description: "Building modern web applications.",
        },
      ],
    },
    education: {
      title: "Education & Certifications",
      subtitle: "Academic background and certifications.",
      items: [
        {
          degree: "Electronic Engineering",
          institution: "Universidad Mayor de San Simón (UMSS)",
          year: "",
        },
        {
          degree: "Full Stack Development",
          institution: "Henry",
          year: "",
        },
        {
          degree: "CCNA — Cisco Certified Network Associate",
          institution: "Cisco",
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
      background: "Trayectoria",
      projects: "Proyectos",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      certifications: "Certificaciones",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Alejandro Camacho",
      role: "Ingeniero Electrónico | Desarrollador Full Stack",
      summary:
        "Construyo soluciones de software que convierten desafíos técnicos en productos prácticos y confiables. Como Ingeniero Electrónico, combino experiencia práctica en desarrollo de software con experiencia profesional en redes e infraestructura, aplicando una mentalidad de ingeniería enfocada en arquitectura, seguridad y confiabilidad.",
      viewProjects: "Ver Proyectos",
      downloadCV: "Descargar CV",
      alt: "Foto de Alejandro Camacho",
    },
    background: {
      title: "Aplicando Ingeniería al Desarrollo de Software",
      subtitle: "Construyendo software con mentalidad de ingeniero.",
      blocks: [
        {
          title: "Mentalidad de Ingeniería",
          tags: ["Pensamiento analítico", "Resolución de problemas", "Pensamiento sistémico"],
        },
        {
          title: "Fundamentos Técnicos",
          tags: ["Sistemas", "Redes", "Infraestructura"],
        },
        {
          title: "Desarrollo de Software",
          tags: ["React", "Node.js", "PostgreSQL", "API REST"],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      subtitle: "Soluciones integrales.",
      view: "Ver Código",
      viewApp: "Ver Demo",
      viewVideo: "Video Demo",
      viewPlatform: "Equipo",
      openImage: "Ver imagen del proyecto",
      closeImage: "Cerrar",
      featured: {
        tag: "Proyecto en Equipo",
        technologiesLabel: "Tecnologías",
        featuresLabel: "Funcionalidad",
        title: "App BiT",
        short:
          "Plataforma B2G que ayuda a gestores públicos a decidir dónde invertir. Cruza datos territoriales de conectividad con indicadores sociales clave y un asistente de IA que responde en lenguaje natural para generar reportes en segundos.",
        highlights: ["Comparación de zonas", "Chat IA", "Reportes de datos"],
        technologies: ["JavaScript", "React", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Docker"],
        demo: "https://s06-26-nc-equipo-69-b2g-frontend.vercel.app/",
        repo: "https://github.com/No-Country-simulation/s06-26-nc-equipo-69-b2g",
        platform: "https://nocountry.tech/simulacion-laboral-junio-2026/cmq1z370p00a9i201pi4438r1",
      },
      othersTitle: "Proyectos Seleccionados",
      items: [
        {
          title: "Weather App",
          tag: "Proyecto Personal",
          short:
            "Aplicación web interactiva del clima con condiciones actuales y pronósticos en ciudades de todo el mundo. Consume la API de OpenWeatherMap y permite buscar cualquier ciudad al instante.",
          description:
            "Aplicación de clima que muestra las condiciones actuales y pronósticos para ciudades de todo el mundo a través de la API de OpenWeatherMap.",
          tech: ["JavaScript", "React", "Vite", "Tailwind CSS", "REST API"],
          highlights: ["Búsqueda de ciudad", "Condiciones actuales", "Pronóstico"],
        },
        {
          title: "Pokémon App",
          tag: "Proyecto Personal",
          short:
            "Aplicación full-stack que actúa como Pokedex interactivo. Consume la PokéAPI oficial y utiliza un backend propio con PostgreSQL y Sequelize para gestionar la persistencia de datos, permitiendo un CRUD completo y búsqueda avanzada.",
          description:
            "Aplicación full-stack para explorar y gestionar datos de Pokémon, consumiendo la PokéAPI oficial y exponiendo una API REST propia con PostgreSQL y Sequelize.",
          tech: ["JavaScript", "React", "Node.js", "Express", "PostgreSQL", "Sequelize", "REST API"],
          highlights: ["Búsqueda", "Filtrado", "Ordenamiento", "CRUD"],
          demo: "https://pokemon-app-by-ale-ncp5.vercel.app/",
          repo: "https://github.com/AlexandroCamacho1000/PokemonAppByAle",
        },
      ],
    },
    certifications: {
      title: "Certificaciones",
      subtitle: "Certificaciones profesionales.",
      items: [
        {
          degree: "Cisco Certified Network Associate (CCNA)",
          institution: "Cisco",
          year: "",
        },
      ],
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle: "Las tecnologías con las que construyo software.",
      frontendTitle: "Frontend",
      backendTitle: "Backend",
      databaseTitle: "Base de Datos",
      cloudTitle: "Herramientas y Cloud",
      frontend: {
        javascript: "JavaScript",
        react: "React",
        html: "HTML",
        css: "CSS",
        tailwind: "Tailwind CSS",
      },
      backend: {
        node: "Node.js",
        express: "Express",
        rest: "APIs REST",
      },
      database: {
        postgresql: "PostgreSQL",
        sql: "SQL",
        sequelize: "Sequelize",
      },
      cloud: {
        git: "Git",
        github: "GitHub",
        aws: "AWS",
        docker: "Docker",
      },
    },
    journey: {
      title: "Mi Trayectoria",
      subtitle: "De la Ingeniería al Desarrollo de Software.",
      nodes: [
        {
          title: "Ingeniero Electrónico",
          meta: "UMSS",
          description: "Base de ingeniería.",
        },
        {
          title: "Ingeniero de Sistemas y Redes",
          meta: "2016 – 2022",
          tags: ["Redes", "Sistemas", "Infraestructura", "Resolución de Problemas Técnicos"],
        },
        {
          title: "Desarrollador Full Stack",
          meta: "",
          description: "Construyendo aplicaciones web modernas.",
        },
      ],
    },
    education: {
      title: "Educación y Certificaciones",
      subtitle: "Formación académica y certificaciones.",
      items: [
        {
          degree: "Ingeniería Electrónica",
          institution: "Universidad Mayor de San Simón (UMSS)",
          year: "",
        },
        {
          degree: "Desarrollo Full Stack",
          institution: "Henry",
          year: "",
        },
        {
          degree: "CCNA — Cisco Certified Network Associate",
          institution: "Cisco",
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
