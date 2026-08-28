const translations = {
  en: {
    nav: {
      home: "Home",
      hero: "Home",
      background: "Engineering",
      projects: "Projects",
      skills: "Stack",
      journey: "My Journey",
      education: "Education",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Alejandro Camacho",
      role: "Electronic Engineer | Full-Stack Developer",
      summary:
        "I build software that turns complex problems into practical, reliable solutions. With a background as an Electronic Engineer and hands-on experience in networking and infrastructure, I now focus on full-stack development.",
      viewProjects: "View Projects",
      downloadCV: "Download Resume",
      alt: "Photo of Alejandro Camacho",
    },
    background: {
      title: "Applying Engineering to Software Development",
      subtitle: "Building software with an engineering mindset.",
      note:
        "My engineering background in networking, infrastructure, and security gives me a strong foundation for modern software deployment and DevOps practices.",
      blocks: [
        {
          title: "Engineering Mindset",
          tags: ["Systems thinking", "Problem solving", "Technical decision-making", "Reliability"],
        },
        {
          title: "Technical Foundation",
          tags: ["Networking", "Infrastructure", "Servers", "Security"],
        },
        {
          title: "Software Development",
          tags: ["Architecture", "APIs", "Databases", "Deployment"],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of applications built with modern technologies.",
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
          "B2G platform helping public managers decide where to invest. It unifies public connectivity and social data, while an AI assistant turns it into clear reports in natural language.",
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
      title: "Technical Stack",
      subtitle: "Technologies and practices I use to build reliable software.",
      groups: [
        {
          title: "Frontend",
          items: ["React", "JavaScript", "Redux", "Tailwind CSS", "Vite"],
        },
        {
          title: "Backend",
          items: ["Node.js", "Express", "REST APIs"],
        },
        {
          title: "Data",
          items: ["PostgreSQL", "SQL", "Sequelize", "Supabase"],
        },
        {
          title: "Tools & Practices",
          items: ["Git", "GitHub", "Docker", "GitHub Actions", "Vercel", "Agile", "Scrum", "Jira"],
        },
      ],
    },
    tools: {
      title: "Modern Development Tools",
      subtitle: "Tools I use to improve development efficiency and streamline my workflow.",
      items: ["GitHub Copilot", "Cursor", "OpenCode", "Claude Code", "ChatGPT"],
    },
    journey: {
      title: "My Journey",
      subtitle: "Building on my engineering foundation and professional experience through software development.",
      stages: [
        {
          title: "Engineering Foundation",
          label: "Electronic Engineer",
        },
        {
          title: "Software Development",
          label: "Full Stack Development",
        },
        {
          title: "Applying Engineering Principles",
          label: "Engineering + Software",
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Electronic Engineering",
          institution: "Universidad Mayor de San Simón (UMSS)",
          featured: true,
        },
        {
          degree: "Full Stack Development",
          institution: "University Diploma — Universidad del Valle (Univalle)",
          note: "Additional Full Stack training · Henry",
        },
      ],
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Let's build something meaningful.",
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
      background: "Ingeniería",
      projects: "Proyectos",
      skills: "Stack",
      journey: "Mi Trayectoria",
      education: "Educación",
      certifications: "Certificaciones",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Alejandro Camacho",
      role: "Ingeniero Electrónico | Desarrollador Full Stack",
      summary:
        "Construyo software que convierte problemas complejos en soluciones prácticas y confiables. Con una formación como Ingeniero Electrónico y experiencia práctica en redes e infraestructura, ahora me enfoco en el desarrollo full-stack.",
      viewProjects: "Ver Proyectos",
      downloadCV: "Descargar CV",
      alt: "Foto de Alejandro Camacho",
    },
    background: {
      title: "Aplicando Ingeniería al Desarrollo de Software",
      subtitle: "Construyendo software con mentalidad de ingeniero.",
      note:
        "Mi experiencia en ingeniería, redes, infraestructura y seguridad me proporciona una base sólida para el despliegue moderno de software y las prácticas DevOps.",
      blocks: [
        {
          title: "Mentalidad de Ingeniería",
          tags: ["Pensamiento sistémico", "Resolución de problemas", "Toma de decisiones técnicas", "Confiabilidad"],
        },
        {
          title: "Fundamentos Técnicos",
          tags: ["Redes", "Infraestructura", "Servidores", "Seguridad"],
        },
        {
          title: "Desarrollo de Software",
          tags: ["Arquitectura", "APIs", "Bases de datos", "Despliegue"],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      subtitle: "Una selección de aplicaciones construidas con tecnologías modernas.",
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
          "Plataforma B2G que ayuda a gestores públicos a decidir dónde invertir. Unifica datos públicos de conectividad y sociales, mientras un asistente de IA los convierte en reportes claros en lenguaje natural.",
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
      title: "Stack Técnico",
      subtitle: "Tecnologías y prácticas que uso para construir software confiable.",
      groups: [
        {
          title: "Frontend",
          items: ["React", "JavaScript", "Redux", "Tailwind CSS", "Vite"],
        },
        {
          title: "Backend",
          items: ["Node.js", "Express", "REST APIs"],
        },
        {
          title: "Datos",
          items: ["PostgreSQL", "SQL", "Sequelize", "Supabase"],
        },
        {
          title: "Herramientas y Prácticas",
          items: ["Git", "GitHub", "Docker", "GitHub Actions", "Vercel", "Agile", "Scrum", "Jira"],
        },
      ],
    },
    tools: {
      title: "Herramientas de Desarrollo Modernas",
      subtitle: "Herramientas que uso para mejorar mi eficiencia y agilizar mi flujo de trabajo.",
      items: ["GitHub Copilot", "Cursor", "OpenCode", "Claude Code", "ChatGPT"],
    },
    journey: {
      title: "Mi Trayectoria",
      subtitle: "Construyendo sobre mi base de ingeniería y experiencia profesional a través del desarrollo de software.",
      stages: [
        {
          title: "Base de Ingeniería",
          label: "Ingeniero Electrónico",
        },
        {
          title: "Desarrollo de Software",
          label: "Desarrollo Full Stack",
        },
        {
          title: "Aplicando Principios de Ingeniería",
          label: "Ingeniería + Software",
        },
      ],
    },
    education: {
      title: "Educación",
      items: [
        {
          degree: "Ingeniería Electrónica",
          institution: "Universidad Mayor de San Simón (UMSS)",
          featured: true,
        },
        {
          degree: "Desarrollo Full Stack",
          institution: "Diplomado Universitario — Universidad del Valle (Univalle)",
          note: "Formación Full Stack adicional · Henry",
        },
      ],
    },
    contact: {
      title: "Trabajemos Juntos",
      subtitle: "Construyamos algo significativo.",
    },
    footer: {
      rights: "© 2026 Alejandro Camacho. Casi todos los derechos reservados.",
      sig: "</AlejandroCamacho>",
    },
  },
};

export default translations;
