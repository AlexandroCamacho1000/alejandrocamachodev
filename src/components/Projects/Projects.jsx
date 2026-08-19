import './Projects.css';
import ProjectCard from './Projectcard';
import weatherImg from "../../assets/weather.jpg";
import pokemonImg from "../../assets/pokemon.jpg";
import { useLanguage } from '../../i18n/useLanguage';

function Projects() {
  const { t } = useLanguage();

  const meta = [
    { link: "https://github.com/AlexandroCamacho1000/PokemonAppByAle", linkApp: "https://pokemon-app-by-ale-ncp5.vercel.app", image: pokemonImg },
    { link: "https://github.com/AlexandroCamacho1000/WeatherAppByAle", image: weatherImg },
  ];

  const items = t('projects.items');

  return (
    <section className="projects" id="projects">
      <h2 className="section-title" data-index="03">{t('projects.title')}</h2>
      <p className="section-subtitle">{t('projects.subtitle')}</p>
      <div className="projects-grid">
        {items.map((item, i) => (
          <ProjectCard key={i} {...item} {...meta[i]} />
        ))}
      </div>
    </section>
  );
}

export default Projects;