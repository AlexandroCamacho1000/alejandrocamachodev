import './Projects.css';
import ProjectCard from './Projectcard';
import bitImg from "../../assets/bit.png";
import pokemonImg from "../../assets/pokemon.jpg";
import weatherImg from "../../assets/weather.jpg";
import foodImg from "../../assets/food.jpg";
import { useLanguage } from '../../i18n/useLanguage';

function Projects() {
  const { t } = useLanguage();
  const featured = t('projects.featured');
  const items = t('projects.items');

  const projects = [];

  if (featured.title) {
    projects.push({
      ...featured,
      image: bitImg,
      tag: t('projects.featured.tag'),
      tech: featured.technologies,
      link: featured.repo,
      linkApp: featured.demo,
      linkPlatform: featured.platform,
      featured: true,
    });
  }

  const secondaryMeta = [
    { link: "https://github.com/AlexandroCamacho1000/FoodAppByAle", linkApp: "https://food-app-by-ale.vercel.app/", image: foodImg },
    { link: "https://github.com/AlexandroCamacho1000/PokemonAppByAle", linkApp: "https://pokemon-app-by-ale.vercel.app/", image: pokemonImg },
    { link: "https://github.com/AlexandroCamacho1000/WeatherAppByAle", linkApp: "https://weather-app-by-ale-seven.vercel.app/", image: weatherImg },
  ];

  items.forEach((item, i) => {
    projects.push({ ...item, ...secondaryMeta[i] });
  });

  return (
    <section className="projects" id="projects">
      <h2 className="section-title" data-index="01">{t('projects.title')} <span className="section-title-code" aria-hidden="true">&lt;/&gt;</span></h2>
      <p className="section-subtitle">{t('projects.subtitle')}</p>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;