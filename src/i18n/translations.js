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
      subtitle: "Networking & Infrastructure Background",
      summary:
        "As an Electronic Engineer who has worked in networking, infrastructure and technical support, I bring real engineering experience to software. I've already built applications that solve practical problems, and I'm committed to making software development the next chapter of my career.",
      viewProjects: "View Projects",
      downloadCV: "Download Resume",
      alt: "Photo of Alejandro Camacho",
    },
    background: {
      title: "Engineering Background",
      subtitle:
        "An engineer with real technical experience, now specialized in software development.",
      steps: [
        {
          title: "Electronic Engineering",
          description: "University degree in Electronic Engineering (UMSS).",
        },
        {
          title: "Networking",
          description:
            "Network Engineer — designed, deployed and maintained enterprise networks.",
        },
        {
          title: "Infrastructure & Technical Support",
          description:
            "Servers, systems administration and technical support for critical infrastructure.",
        },
        {
          title: "Software Development",
          description:
            "Building full-stack web applications with React, Node.js and PostgreSQL.",
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Selected work — quality over quantity.",
      view: "Repository",
      viewApp: "Live Demo",
      featured: {
        tag: "Featured Project",
        problemLabel: "Problem",
        solutionLabel: "Solution",
        contributionLabel: "My Contribution",
        challengesLabel: "Technical Challenges",
        technologiesLabel: "Technologies",
        title: "",
        problem: "",
        solution: "",
        contribution: "",
        challenges: "",
        technologies: [],
        demo: "",
        repo: "",
      },
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
      title: "Skills",
      subtitle: "The technologies I build software with.",
      frontendTitle: "Frontend",
      backendTitle: "Backend",
      databaseTitle: "Database",
      cloudTitle: "Cloud & Tools",
      frontend: {
        javascript: "JavaScript",
        react: "React",
        tailwind: "Tailwind CSS",
      },
      backend: {
        node: "Node.js",
        rest: "REST APIs",
      },
      database: {
        postgresql: "PostgreSQL",
        supabase: "Supabase",
      },
      cloud: {
        aws: "AWS",
        git: "Git",
        github: "GitHub",
        linux: "Linux",
      },
    },
    experience: {
      title: "Professional Experience",
      subtitle: "Real-world experience in networks, infrastructure and support.",
      jobs: [
        {
          role: "Network Engineer / Technical Support",
          company: "Electric Utility Company",
          period: "2016 – 2022",
          description:
            "Over six years responsible for the company's network infrastructure, servers and IT systems — guaranteeing availability, security and performance across critical services.",
          achievements: [
            "Designed and maintained enterprise networks and critical systems with high availability.",
            "Solved technical issues across infrastructure, servers and end-user systems.",
            "Automated operational processes, cutting downtime and manual work.",
            "Led infrastructure projects and supported the whole organization.",
          ],
          tech: ["Networking", "Servers", "Systems Administration", "Automation"],
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
      subtitle: "Formación en Redes e Infraestructura",
      summary:
        "Como Ingeniero Electrónico que ha trabajado en redes, infraestructura y soporte técnico, aporto experiencia real de ingeniería al software. Ya he construido aplicaciones que resuelven problemas prácticos, y estoy decidido a hacer del desarrollo de software el próximo capítulo de mi carrera.",
      viewProjects: "Ver Proyectos",
      downloadCV: "Descargar CV",
      alt: "Foto de Alejandro Camacho",
    },
    background: {
      title: "Trayectoria de Ingeniería",
      subtitle:
        "Un ingeniero con experiencia técnica real, ahora especializado en desarrollo de software.",
      steps: [
        {
          title: "Ingeniería Electrónica",
          description: "Título universitario en Ingeniería Electrónica (UMSS).",
        },
        {
          title: "Redes",
          description:
            "Ingeniero de Redes — diseñé, implementé y mantuve redes empresariales.",
        },
        {
          title: "Infraestructura y Soporte Técnico",
          description:
            "Servidores, administración de sistemas y soporte técnico de infraestructura crítica.",
        },
        {
          title: "Desarrollo de Software",
          description:
            "Construyendo aplicaciones web full-stack con React, Node.js y PostgreSQL.",
        },
      ],
    },
    projects: {
      title: "Proyectos",
      subtitle: "Trabajo seleccionado — calidad sobre cantidad.",
      view: "Repositorio",
      viewApp: "Demo en vivo",
      featured: {
        tag: "Proyecto Destacado",
        problemLabel: "Problema",
        solutionLabel: "Solución",
        contributionLabel: "Mi Contribución",
        challengesLabel: "Desafíos Técnicos",
        technologiesLabel: "Tecnologías",
        title: "",
        problem: "",
        solution: "",
        contribution: "",
        challenges: "",
        technologies: [],
        demo: "",
        repo: "",
      },
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
      title: "Habilidades",
      subtitle: "Las tecnologías con las que construyo software.",
      frontendTitle: "Frontend",
      backendTitle: "Backend",
      databaseTitle: "Base de Datos",
      cloudTitle: "Cloud y Herramientas",
      frontend: {
        javascript: "JavaScript",
        react: "React",
        tailwind: "Tailwind CSS",
      },
      backend: {
        node: "Node.js",
        rest: "APIs REST",
      },
      database: {
        postgresql: "PostgreSQL",
        supabase: "Supabase",
      },
      cloud: {
        aws: "AWS",
        git: "Git",
        github: "GitHub",
        linux: "Linux",
      },
    },
    experience: {
      title: "Experiencia Profesional",
      subtitle: "Experiencia real en redes, infraestructura y soporte.",
      jobs: [
        {
          role: "Ingeniero de Redes / Soporte Técnico",
          company: "Empresa Eléctrica",
          period: "2016 – 2022",
          description:
            "Más de seis años a cargo de la infraestructura de red, los servidores y los sistemas de TI de la empresa — garantizando disponibilidad, seguridad y rendimiento de los servicios críticos.",
          achievements: [
            "Diseñé y mantuve redes empresariales y sistemas críticos con alta disponibilidad.",
            "Resolví problemas técnicos de infraestructura, servidores y sistemas de los usuarios finales.",
            "Automaticé procesos operativos, reduciendo tiempos de inactividad y trabajo manual.",
            "Lideré proyectos de infraestructura y brindé soporte a toda la organización.",
          ],
          tech: ["Redes", "Servidores", "Administración de Sistemas", "Automatización"],
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
